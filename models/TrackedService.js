module.exports = (sequelize, Sequelize) => {
    const TrackedService = sequelize.define('trackedService', {
      identifier: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  
    return TrackedService
  }
  