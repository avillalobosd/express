const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');  //SEQUELIZE
const dbfstream = require('dbfstream'); //DBF LIBRERIAS
const db = require('../../config/database')  //DATABASE
const fovis = require('../../models/ctaxcob')  //MODEL

// "/consulta/..""

router.get('/fovisg02/:no_emp', async (req, res) => {
    var resultado = await fovis.findAll({
        where: {
          NO_EMP: req.params.no_emp
        }
      }); 

   res.send(resultado)

})




module.exports = router;