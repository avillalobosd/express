const Sequelize = require('sequelize');
const db = require('../config/database')

let aporta = db.define('aporta', {
    NO_DEP: {
        type: Sequelize.INTEGER
    },
    NO_EMP: {
        type: Sequelize.STRING
    },
    NO_DEPTO: {
        type: Sequelize.INTEGER
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
    RFC_FID: {
        type: Sequelize.STRING
    },
    FEC_ING: {
        type: Sequelize.STRING
    },
    NO_DEP_AVA: {
        type: Sequelize.INTEGER
    },
    NO_EMP_AVA: {
        type: Sequelize.STRING
    },
    DEPTO_AVA: {
        type: Sequelize.INTEGER
    },
    AP_PAT_AVA: {
        type: Sequelize.STRING
    },
    AP_MAT_AVA: {
        type: Sequelize.STRING
    },
    NOMBRE_AVA: {
        type: Sequelize.STRING
    },
    RFC_AVA: {
        type: Sequelize.STRING
    },
    FEC_AVA: {
        type: Sequelize.STRING
    },
    STATUS: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
} )

aporta.sync()
module.exports = aporta