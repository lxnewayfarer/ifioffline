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
db.Recievers = require('./Reciever.js')(sequelize, Sequelize)
db.UserDelay = require('./UserDelay.js')(sequelize, Sequelize)

// Database associations
db.Users.hasMany(db.TrackedServices, { foreignKey: 'id_user', sourceKey: 'id' })
db.TrackedServices.belongsTo(db.Users, { foreignKey: 'id_user', targetKey: 'id' })

db.Services.hasMany(db.TrackedServices, { foreignKey: 'id_service', sourceKey: 'id' })
db.TrackedServices.belongsTo(db.Services, { foreignKey: 'id_service', targetKey: 'id' })

db.Users.hasMany(db.Recievers, { foreignKey: 'id_user', sourceKey: 'id' })
db.Recievers.belongsTo(db.Users, { foreignKey: 'id_user', targetKey: 'id' })

db.Users.hasOne(db.UserDelay, { foreignKey: 'id_user', sourceKey: 'id' })
db.UserDelay.belongsTo(db.Users, { foreignKey: 'id_user', targetKey: 'id' })

db.Services.hasMany(db.Recievers, { foreignKey: 'id_service', sourceKey: 'id' })
db.Recievers.belongsTo(db.Services, { foreignKey: 'id_service', targetKey: 'id' })

module.exports = db
