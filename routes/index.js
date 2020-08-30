const express = require('express'),
  router = express.Router()

router.route('/').get((req, res) => {
  res.send('pdji')
})

module.exports = router