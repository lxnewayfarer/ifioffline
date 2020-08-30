const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  port: '5432',
  logging: (msg) => console.log(msg)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Users = require('./User.js')(sequelize, Sequelize)
db.Services = require('./Service.js')(sequelize, Sequelize)

// Many-to-many associations
// Movie.belongsToMany(Actor, { through: 'ActorMovies' });
// Actor.belongsToMany(Movie, { through: 'ActorMovies' });

module.exports = db
