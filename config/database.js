const Sequelize = require('sequelize')

// BASE DE DATOS,UUSUARIO,CONTRASEÑA
module.exports = new Sequelize ('ctaxcob', 'root','',{
port:3306,
host: 'localhost',
dialect: 'mysql',
operatorAliases: false,
});