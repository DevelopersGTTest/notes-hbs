'use strict'
// continue learn... https://github.com/WaelYasmina/handlebars-guide
// axios link = https://www.npmjs.com/package/axios
// guide = https://github.com/accimeesterlin/express-handlebars-full-example

const handlebars = require('express-handlebars')
const config = require('./config')
const express = require('express')
const app = express()

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs'
}));

app.use(express.static('public'))

app.get('/', (req, res) => {
    /***
     *  Serves the body of the page aka "main.handlebars" 
     * to the container //aka "index.hbs"
     * 
     * */
    res.render('main', {layout : 'index'});
});
    

app.listen(config.port, ()=>{
    console.log(`server listen on ${config.port}`)
});