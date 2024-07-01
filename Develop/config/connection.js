// require("dotenv").config();
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const Sequelize = require("sequelize");

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "postgres",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
