const handlebars = require('express-handlebars')
const express = require('express')
const app = express()

const P = 3000;

app.set('view engine', 'hbs');

//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    //new configuration parameter
    extname: 'hbs'
}));

app.use(express.static('views'))

app.get('/', (req, res) => {
    /***
     *  Serves the body of the page aka "main.handlebars" 
     * to the container //aka "index.hbs"
     * 
     * */
    res.render('main', {layout : 'index'});
});
    

app.listen(P, ()=>{
    console.log(`server listen on ${P}`)
});