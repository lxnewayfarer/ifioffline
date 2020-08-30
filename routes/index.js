const express = require('express'),
  router = express.Router()

router.route('/').get((req, res) => {
  res.send('API index get')
})

module.exports = router