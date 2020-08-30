const express = require('express')
const config = require('config')
const db = require("../models");

const PORT = config.get('port') || 5000

const app = express()

async function start() {
    // production - await db.sequelize.sync(); (w/o force: true)
    await db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    });
    const user = db.Users.build({ name: "Jane" });
    user.save()
}

start()

app.listen(PORT, () => console.log(`App has been stared on port ${PORT}...`))




