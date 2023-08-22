import React from 'react'

function New() {
  return (
    <div>
        { /* form */ }
        <h1> Pokemon Page!</h1>
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