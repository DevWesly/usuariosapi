const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const User = require("../models/User");
const Address = require("../models/Address");
const Job = require("../models/Job");


const connection = new Sequelize(dbConfig);


User.init(connection);
Address.init(connection);
Job.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Job.associate(connection.models);

module.exports = connection;
