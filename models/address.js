const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Address = sequelize.define('address', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	street: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	province: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Address;
