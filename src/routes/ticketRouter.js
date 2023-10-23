const express = require('express');
const router = express.Router();

router.get('/', ticketController.getAllTickets);
router.post('/', ticketController.createTicket);


module.exports = router;
