module.exports = (sequelize, Sequelize) => {
    const Reciever = sequelize.define("reciever", {
      identifier: {
        type: Sequelize.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    });
  
    return Reciever;
};