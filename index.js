const express = require('express')
const app = express()

const P = 3000;
 
app.listen(P, ()=>{
    console.log(`server listen on ${P}`)
});