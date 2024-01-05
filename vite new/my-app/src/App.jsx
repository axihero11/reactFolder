import { useState } from 'react'
import './App.css'
import Decrement from './counter/Decrement'

function App() {
  const [count,setCount] = useState(0)


const decr = () => {
  setCount(count -1 )
}

  return (
    <>

    {count >= 5 && (
      <h1>Thank you</h1>
    )}


    <div className="counter">
     <Decrement decr={decr}/>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
    </>
  )
}

export default App
