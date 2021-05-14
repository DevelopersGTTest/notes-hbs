//Loads the handlebars module
const handlebars = require('express-handlebars')
const express = require('express')
const app = express()

const P = 3000;

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');

//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + './layouts',
}));

//Serves static files (we need it to import a css file)
app.use(express.static('views'))

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'index'});
    });
    

app.listen(P, ()=>{
    console.log(`server listen on ${P}`)
});