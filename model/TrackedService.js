module.exports = (sequelize, Sequelize) => {
  const TrackedService = sequelize.define('tracked_service', {
    identifier: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })

  return TrackedService
}
