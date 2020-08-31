const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
// const db = require('../models')

const app = express()

// eslint-disable-next-line no-undef
app.set('port', process.env.APP_PORT || 3000)
app.use(bodyParser.json()) // json parcer
app.use(bodyParser.urlencoded({ extended: true }))
// probably need to use `app.use(errorHandler())` to handle errors through api

app.use(require('../routes'))

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})
