const Sequelize = require('sequelize');
const db = require('../config/database')

let ec_burocratas = db.define('ec_burocratas', {
    CVE_FIDEIC: {
        type: Sequelize.INTEGER
    },
    TM: {
        type: Sequelize.STRING
    },
    FECHA: {
        type: Sequelize.STRING
    },
    NO_DEP: {
        type: Sequelize.INTEGER
    },
    ANIO: {
        type: Sequelize.INTEGER
    },
    QUIN: {
        type: Sequelize.INTEGER
    },
    CLAVE: {
        type: Sequelize.STRING
    },
    NO_EMP: {
        type: Sequelize.STRING
    },
    NO_JUB: {
        type: Sequelize.STRING
    },
    NO_EMP_AVA: {
        type: Sequelize.STRING
    },
    ANTER: {
        type: Sequelize.STRING
    },
    NO_EXP: {
        type: Sequelize.STRING
    },
    MONTO: {
        type: Sequelize.DECIMAL(10,2)
    },
    SALDO_INI: {
        type: Sequelize.DECIMAL(10,2)
    },
    CAP: {
        type: Sequelize.DECIMAL(10,2)
    },
    INT: {
        type: Sequelize.DECIMAL(10,2)
    },
    IPAG: {
        type: Sequelize.DECIMAL(10,2)
    },
    INT_X_PAG: {
        type: Sequelize.DECIMAL(10,2)
    },
    CANCEL: {
        type: Sequelize.DECIMAL(10,2)
    },
    REEMBOLS: {
        type: Sequelize.DECIMAL(10,2)
    },
    SALDO_INI: {
        type: Sequelize.DECIMAL(10,2)
    },
    DES_QUIN: {
        type: Sequelize.DECIMAL(10,2)
    },
    TASA: {
        type: Sequelize.DECIMAL(10,5)
    },
    CONCEPTO: {
        type: Sequelize.STRING
    },
    ANIO_QUIN: {
        type: Sequelize.INTEGER
    },
    CASO: {
        type: Sequelize.INTEGER
    }
},{
    freezeTableName: true,
} )

ec_burocratas.sync()
module.exports = ec_burocratas