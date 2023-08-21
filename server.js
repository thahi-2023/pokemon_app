const express = require('express');
const app = express()
const port = 3000;
const pokemon = require('./models/pokemon.js')

//setting view engine
// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());






//Route Home
app.get('/', (req, res)=> {
   // res.send(pokemon)
    res.send('<h1>Welcome To Pokemon App!<h1/>')
});

//pokemon Index
app.get('/pokemon', (req, res)=> {
    res.render('Index', {
        pokemon: pokemon,
    })
})








//Listener
app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:3000/ port:",${port}`)
})