import React from 'react'

const Button = ({ name }) => {
  function handleClick (){
    console.log(name);
  }
  
  
  return <>
    <button onClick={handleClick} style={{"marginRight": "1rem", "marginTop": "1rem"}}>{name}</button>
  </>
}

export default Button;