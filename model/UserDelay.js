module.exports = (sequelize, Sequelize) => {
  const UserDelay = sequelize.define('users_delay', {
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
  })

  return UserDelay
}
