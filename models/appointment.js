const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Appointment = sequelize.define('appointment', {
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
	zipCode: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Appointment;
