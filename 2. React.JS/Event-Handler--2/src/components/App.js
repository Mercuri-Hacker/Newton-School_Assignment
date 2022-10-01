import React from 'react'
import '../styles/App.css';
const App = () => {

  
  const handleClick = (event) =>{
    // use console.log
    event.preventDefault()
    console.log(`Button id is:-${event.target.id}`);
    
    
  }

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button id="button-a" onClick={handleClick}>Button A</button>
      <button id="button-b" onClick={handleClick}>Button B</button>
      
    </div>
  )
}


export default App;
