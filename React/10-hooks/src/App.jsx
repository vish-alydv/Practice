import React, { useState } from 'react'

const App = () => {

  // const [num, setNum]= useState({user:"abc",age:90})
  const [num,setNum]=useState(10)

  const btnClicked =()=>{
    // setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
  }


  // const btnClicked =()=>{
  //   const newNum = {...num};
  //   newNum.user= "qwerty"
  //   setNum(newNum)
  // }

  //  const btnClicked =()=>{
  //   setNum(prev=>({...prev,age:40}))
  // }
  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click Magic</button>
    </div>
  )
}

export default App