const Sequelize = require('sequelize');

const sequelize = new Sequelize('dental-node', 'root', 'rootpass', {
	dialect: 'mysql',
	host: 'localhost',
});

module.exports = sequelize;
