const { Ticket } = require("../db");

// GET ALL

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los tickets" });
  }
};

// CREATE

exports.createTicket = async (req, res) => {
  const { cliente, total } = req.body;

  try {
    const newTicket = await Ticket.create({
      cliente,
      total,
      fecha: new Date(),
    });
    res.json(newTicket);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el ticket" });
  }
};
