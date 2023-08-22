import React from 'react'

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#ff0000',
    fontFamily: "sans-serif",
    textAlign: "center",
    };

function New() {

    const IMG_URL= "https://img.pokemondb.net/artwork/large/raichu.jpg";
  return (
    <div>
        { /* form */ }
        <h1 style={myStyle}> Pokemon Page!</h1>
        <a href={`/`}> Home </a><br/><br/>

        <a href='/pokemon'> Pokemon</a><br/><br/>
        

        <form action='/pokemon' method="POST">

          Name:  <input type="text" name="name"/><br/>
           Image: <input type="text" name="img"/><br/>
             Ready To Battle: <input type="checkbox" name="ready to battle"/><br/>
             <input type="submit" name="" value="Create Pokemon"/>

        </form>


        </div>
  )
}

module.exports = New;