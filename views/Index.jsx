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
    <div style={Heading}>
        <h1 style={myStyle}>See All The Pokemon!</h1>
        {
            pokemon.map((pokemon, i)=> {
                return (
                    <ul key={i}>
                        <li>
                           <a href={`/pokemon/${i}`}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </a> 
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