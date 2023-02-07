const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Appointment = sequelize.define('appointment', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	date: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	hour: {
		type: Sequelize.TIME,
		allowNull: false,
	},
});

module.exports = Appointment;
