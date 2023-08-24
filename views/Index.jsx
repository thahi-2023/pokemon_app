import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    fontFamily: "sans-serif",
    };

    const Heading = {
        textAlign: 'center'
    }

function Index({pokemon}) {
  return (
    <div>
        
        <nav style={Heading}>
            <h2 style={myStyle}> See all the Pokemon</h2>
            <a href={'/'}> Home </a>
            <a href="pokemon/new"> Create New Pokemon</a>
        </nav>
        {
            pokemon.map((pokemon, i)=> {
                return (
                    <ul key={i}>
                        <li>
                           <a href={`/pokemon/${pokemon.id}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </a> 
                           {
                            pokemon.readyToBattle ? "It's ready to battle" :
                            "It's not ready to battle."
                           }
                
                        </li>

                    </ul>
                )
            })
        }
           
    </div>
  )
}

 module.exports =Index;