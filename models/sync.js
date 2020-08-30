const db = require('.')

async function start () {
  await db.sequelize.sync().then(() => {
    console.log('DB has been synced')
  })
}

start()
