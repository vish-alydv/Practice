import React from 'react'

const App = () => {

  // function one() {
  //   console.log("Hello")
  // }


  function typing(val){
    console.log("User is Typing",val)
  }
  return (
    <div>
      {/* <button onClick={one} >Click Here</button>
      <button onClick={function two(){console.log("2nd Hello")}} >Click Here</button> */}
      <label htmlFor="username">Write Here</label>
      <input id="username" onChange={function word(elem){
        typing(elem.currentTarget.value)
      }}>
      
      </input>
    </div>
  )
}

export default App