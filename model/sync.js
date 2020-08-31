const db = require('.')

async function start() {
  await db.sequelize.drop({ force: true }).then(() => {
    console.log('Tables has been dropped')
  })
  await db.sequelize.sync().then(() => {
    console.log('DB has been synced')
  })
}

start()
