const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { SECRET } = process.env;

// SIGN UP

exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "El nombre de usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error en el registro de usuario" });
  }
};

// LOGIN

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET, {
      expiresIn: "1y",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en el inicio de sesión" });
  }
};

// UPDATE

exports.update = async (req, res) => {
  const { username, password, newUsername, newPassword, newEmail } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.username = newUsername;
    user.password = hashedPassword;
    user.email = newEmail;

    await user.save();

    res.status(200).json({
      message: "Usuario actualizado con éxito",
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error en la actualización del usuario" });
  }
};

// GET USER INFO

exports.getUserInfo = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

    res.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al recuperar la información del cliente" });
  }
};
