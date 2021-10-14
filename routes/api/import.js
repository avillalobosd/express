const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');  //SEQUELIZE
const dbfstream = require('dbfstream'); //DBF LIBRERIAS
const db = require('../../config/database')  //DATABASE
const fovis = require('../../models/ctaxcob')  //MODEL
const altas = require('../../models/altas')  //MODEL
const aporta = require('../../models/aporta')  //MODEL
const reembol = require('../../models/reembol')  //MODEL
const burocratas = require('../../models/ec_burocratas')  //MODEL

// var DBFFile = require('dbffile-th');
// "/importar/..""
router.get('/fovisg02', (req, res) => {
    var dbf = dbfstream('./dbf/fovisg02.dbf', 'utf-8');
    let fovisg02 = []


    dbf.on('data', (data) => {
        if (data['@deleted']== false) {
            // fovisg02.push({NO_EXP: data['NO_EXP']})
            fovisg02.push(data)
            
        } else {
            console.log("NO")
        }

    });

    dbf.on('end', () => {
        
        // console.log(fovisg02)
        fovis.bulkCreate(fovisg02)
        res.send("LISTO")
    });


})

router.get('/altas', (req, res) => {
    var dbf = dbfstream('./dbf/altas.dbf', 'utf-8');
    let importar = []


    dbf.on('data', (data) => {
        if (data['@deleted']== false) {
            // fovisg02.push({NO_EXP: data['NO_EXP']})
            importar.push(data)
            
        } else {
            console.log("NO")
        }

    });

    dbf.on('end', () => {
        
        // console.log(fovisg02)
        altas.bulkCreate(importar)
        res.send("LISTO")
    });


})

router.get('/aporta', (req, res) => {
    var dbf = dbfstream('./dbf/aporta.dbf', 'utf-8');
    let importar = []


    dbf.on('data', (data) => {
        if (data['@deleted']== false) {
            // fovisg02.push({NO_EXP: data['NO_EXP']})
            importar.push(data)
            
        } else {
            console.log("NO")
        }

    });

    dbf.on('end', () => {
        
        // console.log(fovisg02)
        aporta.bulkCreate(importar)
        res.send("LISTO")
    });


})

router.get('/reembol', (req, res) => {
    var dbf = dbfstream('./dbf/reembol.dbf', 'utf-8');
    let importar = []


    dbf.on('data', (data) => {
        if (data['@deleted']== false) {
            // fovisg02.push({NO_EXP: data['NO_EXP']})
            importar.push(data)
            
        } else {
            console.log("NO")
        }

    });

    dbf.on('end', () => {
        
        // console.log(fovisg02)
        reembol.bulkCreate(importar)
        res.send("LISTO")
    });


})

///////   ESTADOS DE CUENTA
///////   BUROCRATAS
router.get('/burocratas', (req, res) => {
    var dbf = dbfstream('./dbf/ec_burocratas.dbf', 'utf-8');
    let importar = []


    dbf.on('data', async (data) => {
        if (data['@deleted']== false && data['@numOfRecord']<=15000) {
            await burocratas.create(data)

            
        }
    });

    dbf.on('end', () => {
        
        // console.log(fovisg02)
        // burocratas.bulkCreate(importar)
        res.send("listo")
    });

})

router.get('/burocratas2', (req, res) => {
    var dbf = dbfstream('./dbf/ec_burocratas.dbf', 'utf-8');
    let importar = []
    let iteracion=0
    let iteracionj=0
    let tanda=1000


    dbf.on('data', async (data) => {
        if (data['@deleted']== false && iteracion<tanda) {
            importar.push(data)
            iteracion++;
            await console.log(iteracion+" "+importar.length)

            if(iteracion==tanda){
                await burocratas.bulkCreate(importar)
                console.log("AQUI YA SON 100")
                iteracion=0
                importar=[]
                iteracionj++;
                await console.log("NUMERO DE TANDA = "+iteracionj)
                
            }
        } 
    });

    dbf.on('end',async () => {
        if (iteracion !=0){
            await burocratas.bulkCreate(importar)
            console.log("ES LA ULTIMA")
            iteracion=0
            importar=[]
            iteracionj++;
            await console.log("NUMERO DE TANDA = "+iteracionj)

        }
        console.log(iteracion)
        res.send("listo")
    });


})





module.exports = router;