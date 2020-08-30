const config = require('config')
const db = require(".");

async function start() {
    await db.sequelize.sync({ force: true }).then(() => {
        console.log("Drop and re-sync db.");
    });
    db.Users.create({ name: "Jane Watson", email: 'mjwatson@example.com'});
    db.Users.create({ name: "Michel Prado", email: 'pradomichele@example.com'});
    db.Users.create({ name: "Иван Бураков", email: 'ioburakov1997@example.com'});
}
start()
