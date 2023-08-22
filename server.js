const express = require('express');
const app = express()
const port = 3000;
const pokemon = require('./models/pokemon.js')

//setting view engine
// Setting up view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//middleware
app.use((req, res, next)=> {
    console.log('I run for all the routes!')
    next();
})
 //This allows the body of a new post request
 app.use(express.urlencoded({extended: false}))


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

//New Routes for pokemon
app.get("/pokemon/new", (req, res)=> {
    res.render('New');
})

//Create = POST
app.post("/pokemon", (req, res)=> {
    console.log(req.body)
    if (req.body.readyToBattle === 'on') {
        req.body.readyToBattle = true;
    }else {
        req.body.readyToBattle = false;
    }
    pokemon.push(req.body);
    console.log()
    res.redirect('/pokemon');

});


//Show pokemon 
app.get('/pokemon/:id', (req, res)=> {
    res.render('Show', {
        pokemon: pokemon[req.params.id]
    });
});




//Listener
app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:3000/ port:",${port}`)
})