const { sequelize } = require('sequelize');
const sequelize = new Sequelize('blogSpot_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
