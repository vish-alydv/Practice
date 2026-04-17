import React from 'react'
import axios from 'axios'

const App = () => {

  // // const user = {
  // //   username:"Vishal",
  // //   age:18,
  // //   city:"Bhopal"
  // // }

  // // localStorage.setItem("user",JSON.stringify(user))

  // const localuser = JSON.parse(localStorage.getItem("user"))
  // console.log(localuser)

  // async function getData(){
  //   const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const response = await data.json()
  //   console.log(response)
  //   }

  async function getData(){
    const {response} = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    console.log(response)
  }

  return (
    <div>
      <button onClick={getData}>Data Get</button>
    </div>
  )
}

export default App