const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../db");
const { SECRET } = process.env;

// SIGN UP

exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ error: "El nombre de usuario ya existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    res.json({ newUser, username, email });
  } catch (error) {
    res.status(500).json({ error: "Error en el registro de usuario" });
  }
};

// LOGIN

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
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

    res.json({ token, ...user.dataValues });
  } catch (error) {
    res.status(500).json({ error: "Error en el inicio de sesión" });
  }
};

// UPDATE

exports.update = async (req, res) => {
  const { email, newUsername, newEmail } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // const passwordMatch = await bcrypt.compare(password, user.password);
    // if (!passwordMatch) {
    //   return res.status(401).json({ error: "Credenciales inválidas" });
    // }

    // const hashedPassword = await bcrypt.hash(newPassword, 10);

    // user.password = hashedPassword;
    user.username = newUsername;
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
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al recuperar la información del cliente" });
  }
};

// RECOVERY PASSWORD

exports.recovery = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res
        .status(401)
        .json({ error: "No se encontró usuario con ese correo" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    await user.save();

    res.status(200).json({ message: "Usuario actualizado con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error en la recuperación de contraseña" });
  }
};
