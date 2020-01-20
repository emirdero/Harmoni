//@flow
import express from 'express';
let bcrypt = require('bcryptjs');
const path = require('path');
const tokenDecoder = require('./tokenDecoder');
let td = new tokenDecoder();

const adminDao = require('../../dao/adminDao.js');
let dao = new adminDao('mysql-ait.stud.idi.ntnu.no', 'larsoos', 'S6yv7wYa', 'larsoos');
let router = express.Router();

// Get all organisers
router.get('/organisers', (req: express$Request, res: express$Response) => {
  dao.getOrganisers((status, data) => {
    res.status(status);
    res.send(data);
  });
});

// Get all unverified
router.get('/unverified', (req: express$Request, res: express$Response) => {
  dao.getUnverified((status, data) => {
    res.status(status);
    res.send(data);
  });
});

// Change verification status of this organiser
router.put('/unverified/:id', (req: express$Request, res: express$Response) => {
  dao.verifyOrganiser(req.id, (status, data) => {
    res.status(status);
    res.send(data);
  });
});

//TODO authorization.
// only admin should be able to use this

