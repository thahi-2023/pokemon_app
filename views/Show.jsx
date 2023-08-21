import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };


function Show() {
  return (
    <div style={myStyle}>
        <h1>"Gotta Catch 'Em All"</h1>
        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h2>
        <img src={ pokemon.img + '.jpg'}/>
        <a href='/pokemon'> Back </a>
    </div>
  )
}

export default Show