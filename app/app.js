const express = require('express')
const config = require('config')
const db = require("../models");

const PORT = config.get('port') || 5000

const app = express()

async function start() {
    
}

start()

app.listen(PORT, () => console.log(`App has been stared on port ${PORT}...`))




