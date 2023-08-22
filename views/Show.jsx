import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    };

    const backButton ={
      color: "#80ced6",
    }


function Show({pokemon}) {
  return (
    <div>
      <nav>
        <h1 style={myStyle}>"Gotta Catch 'Em All"</h1>


        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h2>
        <img src={ pokemon.img + '.jpg'}/><br/><br/>
        <a href='/pokemon' style={backButton}> Back </a>

        </nav>
    </div>
  )
}

export default Show