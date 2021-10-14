const Sequelize = require('sequelize');
const db = require('../config/database')

let altas = db.define('altas', {
    FECHA_PTMO: {
        type: Sequelize.STRING
    },
    ANIO_CRED: {
        type: Sequelize.INTEGER
    },
    CVE_FIDEIC: {
        type: Sequelize.INTEGER
    },
    NO_DEP: {
        type: Sequelize.INTEGER
    },
    NO_DEP2: {
        type: Sequelize.INTEGER
    },
    NO_EMP: {
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
    NO_DEPTO: {
        type: Sequelize.INTEGER
    },
    RFC_FID: {
        type: Sequelize.STRING
    },
    NO_EMP_AVA: {
        type: Sequelize.STRING
    },
    NO_EMP_AVA: {
        type: Sequelize.STRING
    },
    NO_DEP_AVA: {
        type: Sequelize.INTEGER
    },
    NO_DEP_AVA2: {
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
    IMP_PTMO: {
        type: Sequelize.DECIMAL(10,2)
    },
    APROBADO: {
        type: Sequelize.BOOLEAN
    },
    DESQUIN: {
        type: Sequelize.DECIMAL(10,2)
    },
    ST_DEP: {
        type: Sequelize.BOOLEAN
    },
    MOVTO: {
        type: Sequelize.STRING
    },
    SINDICATO: {
        type: Sequelize.BOOLEAN
    },
    PHONE: {
        type: Sequelize.STRING
    },
    CALLE: {
        type: Sequelize.STRING
    },
    NUMERO: {
        type: Sequelize.INTEGER
    },
    COLONIA: {
        type: Sequelize.STRING
    },
    MUNICIPIO: {
        type: Sequelize.STRING
    },
    PHONE_AVA: {
        type: Sequelize.STRING
    },
    CALLE_AVA: {
        type: Sequelize.STRING
    },
    NUM_AVA: {
        type: Sequelize.INTEGER
    },
    COL_AVA: {
        type: Sequelize.STRING
    },
    MUN_AVA: {
        type: Sequelize.STRING
    },
    TIP_PRES: {
        type: Sequelize.STRING
    },
    PLAZO   : {
        type: Sequelize.INTEGER
    },
    COMENT: {
        type: Sequelize.STRING
    },
    NEWFLD: {
        type: Sequelize.STRING
    },
    REFE_TEL: {
        type: Sequelize.STRING
    },
    REFE: {
        type: Sequelize.STRING
    },
    TEL_CEL: {
        type: Sequelize.STRING
    },
    CODIGOPOST: {
        type: Sequelize.STRING
    },
    TIPOAS: {
        type: Sequelize.STRING
    }
},{
    freezeTableName: true,
} )

altas.sync()
module.exports = altas