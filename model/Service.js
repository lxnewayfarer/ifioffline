module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define('service', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    logo: {
      type: Sequelize.STRING,
      unique: true,
    },
    isCheckable: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    isSendable: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  })

  return Service
}
