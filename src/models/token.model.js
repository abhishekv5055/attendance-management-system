const Sequelize = require("sequelize");
const { connection } = require("../database/connection");
const Authentication = require("./authentication.model");

const Token = connection.sequelize.define("Token", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authentication: {
    type: Sequelize.INTEGER,
  },
  token: {
    type: Sequelize.STRING,
  },
});

Authentication.hasOne(Token, { foreignKey: { name: "authentication" } });
Token.belongsTo(Authentication, { foreignKey: { name: "authentication" } });

module.exports = Token;
