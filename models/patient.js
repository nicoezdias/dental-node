const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Patient = sequelize.define('patient', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	dni: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	admissionDate: {
		type: Sequelize.DATE,
		allowNull: false,
	},
});

module.exports = Patient;
