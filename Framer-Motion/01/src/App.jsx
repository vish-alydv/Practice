import React from 'react'
import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      <motion.div 
      animate={{
        x:1000,
        rotate:720
      }}
      transition={{
        duration:3,
        delay:1
      }}
      className='box'></motion.div>
      {/* <div className='box'></div> */}
    </div>
  )
}

export default App