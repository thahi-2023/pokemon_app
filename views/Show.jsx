import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    };


function Show({pokemon}) {
  return (
    <div>
        <h1 style={myStyle}>"Gotta Catch 'Em All"</h1>
        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h2>
        <img src={ pokemon.img + '.jpg'}/><br/><br/>
        <a href='/pokemon'> Back </a>
    </div>
  )
}

export default Show