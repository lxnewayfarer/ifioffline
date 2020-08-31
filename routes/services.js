var express = require('express'),
  router = express.Router()
const db = require('../model')

router.get('/', function (req, res) {
  db.Services.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      })
    })
})

module.exports = router
