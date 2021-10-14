const Sequelize = require('sequelize');
const db = require('../config/database')

let fovisg02 = db.define('fovisg02', {
    NO_EXP: {
        type: Sequelize.STRING
    },
    TM: {
        type: Sequelize.STRING
    },
    FECHA_PTMO: {
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
    NO_DEP2: {
        type: Sequelize.INTEGER
    },
    CVE_DEP: {
        type: Sequelize.STRING
    },
    NO_EMP: {
        type: Sequelize.STRING
    },
    NO_JUB: {
        type: Sequelize.STRING
    },
    ANTER: {
        type: Sequelize.STRING
    },
    NO_EXP: {
        type: Sequelize.STRING
    },
    NO_PTMO: {
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
    NO_DEP_AVA: {
        type: Sequelize.INTEGER
    },
    NO_DEP_AV2: {
        type: Sequelize.INTEGER
    },
    CVE_DEP_AV: {
        type: Sequelize.STRING
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
    CAP_PAGO: {
        type: Sequelize.FLOAT
    },
    INT_PAG: {
        type: Sequelize.DECIMAL(10,2)
    },
    SALDO_PTMO: {
        type: Sequelize.DECIMAL(10,2)
    },
    SALDOPTMO2: {
        type: Sequelize.DECIMAL(10,2)
    },
    STATUS: {
        type: Sequelize.STRING
    },
    FECHA_C_ST: {
        type: Sequelize.FLOAT
    },
    AA_QQ_U_PA: {
        type: Sequelize.INTEGER
    },
    FECHA_U_M: {
        type: Sequelize.STRING
    },
    INT_PPA: {
        type: Sequelize.DECIMAL(10,2)
    },
    CANCELADO: {
        type: Sequelize.BOOLEAN
    },
    IMP_CAN: {
        type: Sequelize.DECIMAL(10,2)
    },
    FEC_DESCTO: {
        type: Sequelize.STRING
    },
    DESC_FOVI: {
        type: Sequelize.INTEGER
    },
    DEUDOR: {
        type: Sequelize.STRING
    },
    TIP_EMP: {
        type: Sequelize.STRING
    },
    ST_DEP: {
        type: Sequelize.BOOLEAN
    },
    FECHA_CANC: {
        type: Sequelize.STRING
    },
    A_CAPITAL: {
        type: Sequelize.DECIMAL(10,2)
    },
    A_INTERES: {
        type: Sequelize.DECIMAL(10,2)
    },
    A_INT_PPA: {
        type: Sequelize.DECIMAL(10,2)
    },
    VERI: {
        type: Sequelize.CHAR
    },
    NUME: {
        type: Sequelize.INTEGER
    },
    IMP_REEMB: {
        type: Sequelize.DECIMAL(10,2)
    },
    TIP_PRES: {
        type: Sequelize.CHAR
    },
    CODIGOPOST: {
        type: Sequelize.STRING
    },
    TEL_CEL: {
        type: Sequelize.STRING
    },
    REFE_TEL: {
        type: Sequelize.STRING
    },
    REFE: {
        type: Sequelize.STRING
    }

},{
    freezeTableName: true,
} )

fovisg02.sync()
module.exports = fovisg02