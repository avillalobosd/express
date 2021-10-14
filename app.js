var express = require('express');
const path = require('path')
const db = require('./config/database') //DATABASE

//MODELS FOR INITIALIZATION
const fovis = require('./models/ctaxcob')  //MODEL
const altas = require('./models/altas')  //MODEL
const aporta = require('./models/aporta')  //MODEL
const reembol = require('./models/reembol')  //MODEL
// const model = require('./models')  //MODEL
const burocratas = require('./models/ec_burocratas')  //MODEL



// TEST DATABASE
db.authenticate().then(() => console.log("DATABASE CONECTED....")).catch(err=> console.log(err))

var app = express();

//Set Statit Folder
app.use(express.static(path.join(__dirname,'public')));

//API IMPORTAR DATOS DE BASES
app.use('/import', require('./routes/api/import'))

//API CONSULTA DATOS DE BASES
app.use('/consulta', require('./routes/api/consulta'))





const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server started on port '+PORT))

// respond with "hello world" when a GET request is made to the homepage
