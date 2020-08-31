const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  logging: (msg) => console.log(msg),
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require('./User.js')(sequelize, Sequelize)
db.Services = require('./Service.js')(sequelize, Sequelize)
db.TrackedServices = require('./TrackedService.js')(sequelize, Sequelize)

// associations
db.Users.hasMany(db.TrackedServices, { as: 'Services' })
db.TrackedServices.belongsTo(db.Services, { as: 'Services' })

module.exports = db

//reciever {id_user, id_service, identifier, text}
//user_delay {id_user, value} 