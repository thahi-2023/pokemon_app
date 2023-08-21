const express = require('express');
const app = express()
const port = 3000;


//Route Home
app.get('/', (req, res)=> {
    res.send('<h1>Welcome To Pokemon App!<h1/>')
});








//Listener
app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:3000/ port:",${port}`)
})