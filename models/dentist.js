const Sequelize = require('sequelize');

const sequelize = require('../db/database');

const Dentist = sequelize.define('dentist', {
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
	license: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Dentist;
