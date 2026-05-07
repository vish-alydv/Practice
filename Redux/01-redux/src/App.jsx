import React from 'react'
import { increment } from './redux/features/counterslice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(increment)}></button>
      <button onClick={()=>dispatch(decrement)}></button>
    </div>
  )
}

export default App