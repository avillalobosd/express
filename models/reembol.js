const Sequelize = require('sequelize');
const db = require('../config/database')

let reembol = db.define('reembol', {
    TM: {
        type: Sequelize.STRING
    },
    ANIO: {
        type: Sequelize.INTEGER
    },
    QUIN: {
        type: Sequelize.INTEGER
    },
    NO_DEP: {
        type: Sequelize.INTEGER
    },
    NO_EMP: {
        type: Sequelize.STRING
    },
    NO_JUB: {
        type: Sequelize.STRING
    },
    AP_PAT_FID: {
        type: Sequelize.STRING
    },
    AP_MAT_FID: {
        type: Sequelize.STRING
    },
    NOMBRE_FID: {
        type: Sequelize.STRING
    },
    FIDEICO: {
        type: Sequelize.INTEGER
    },
    CAP: {
        type: Sequelize.DECIMAL(10,2)
    },
    CONCEPTO: {
        type: Sequelize.STRING
    },
    MONT_PREST: {
        type: Sequelize.DECIMAL(10,2)
    },
    FECHA_PRES: {
        type: Sequelize.STRING
    },
    FECHA: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
} )

reembol.sync()
module.exports = reembol