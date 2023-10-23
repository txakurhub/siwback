const { Ticket } = require("../models");

// Obtener todos los tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los tickets" });
  }
};

// Crear un nuevo ticket
exports.createTicket = async (req, res) => {
  const { cliente, total, fecha } = req.body;

  try {
    const newTicket = await Ticket.create({ cliente, total, fecha });
    res.json(newTicket);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el ticket" });
  }
};

// Otras funciones de controlador para rutas de actualización, eliminación, etc.
