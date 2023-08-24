require('dotenv').config();
const express = require('express');

const app = express()
const port = 3000;

const pokemon = require('./models/pokemon.js')
const Pokey = require('./models/pokey.js');


const mongoose = require('mongoose');


//connect WITH MONGOOSE
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})

 mongoose.connection.once('open', ()=> {
     console.log('connected to mongoDB');
 });

//setting view engine

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
// app.get('/', (req, res)=> {
//    // res.send(pokemon)
//     res.send(`<h1>Welcome To <a href='/pokemon'> Pokemon </a> App!</h1>`)
// });

//pokemon Index

app.get("/pokemon", async function (req, res){
    const foundPokemon = await Pokey.find({})
    res.render('/Index', {
        pokemon: foundPokemon,
    })
})

//New Routes for pokemon
app.get("/pokemon/new", (req, res)=> {
    res.render('New');
})

//Create = POST
app.post("/pokemon", async (req, res)=> {
    console.log(req.body)
    if (req.body.readyToBattle === 'on') {
        req.body.readyToBattle = true;
    }else {
        req.body.readyToBattle = false;
    }
    const newPokemon = await Pokey.create({
        name: req.body.name,
        img: "http://img.pokemondb.net/artwork/" + req.body.name.toLowerCase(),
        readyToFight: req.body.readyToFight
    })
    console.log(newPokemon)
    res.redirect('/pokemon') // Redirect to the new Array
})
   
    


//Show pokemon 
app.get('/pokemon/:id', async (req, res)=> {
    const onePokey = await Pokey.findById(req.params.id)
    res.render('Show', {
        pokemon: onePokey
    });
});




//Listener
app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:3000/ port:",${port}`)
})