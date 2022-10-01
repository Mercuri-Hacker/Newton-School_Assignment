import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  const words = props.text;
  return(
    <div id ="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/
      words.join(',')
      }
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join  text={arr}/>
    </div>
  )
}


export default App;
