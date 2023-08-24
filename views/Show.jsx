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
        <a href={'/'}>Home</a>
        <a href='/pokemon'>Pokemon</a>
         <a href='/pokemon/new'>Create New Pokemon</a>  
         </nav>
        <h2> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} </h2>
        <img src={ pokemon.img + '.jpg'}/><br/><br/>
        <a href='/pokemon' style={backButton}> Back </a>

        
    </div>
  )
}

export default Show