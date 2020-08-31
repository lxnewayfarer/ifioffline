const express = require('express'),
  router = express.Router()

router.use('/services', require('./services'))
router.use('/users', require('./services'))

router.get('/', function (req, res) {
  res.send('Yep, this is API')
})

router.get('/help', function (req, res) {
  res.send('There must be help I guess')
})

module.exports = router
