module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      login: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return User;
};