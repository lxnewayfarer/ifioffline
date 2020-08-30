const express = require('express'),
  router = express.Router()
const db = require('../models')


router.route('/').get((req, res) => {
    db.Users.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
})

module.exports = router
