import React, { useState } from 'react'
import "./Counter.css"
import { Link } from 'react-router-dom'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

  return (
    <div className='counter'>

    <h1 className="count_display">{count}</h1>

    <div className="count_wrapper">
        <button className='increment' onClick={()=>increment()}>+</button>
        <button className='decrement' onClick={()=>decrement()}>-</button>
    </div>

    <Link to="/"><div className="back_btn"><i className="bi bi-arrow-left"></i></div></Link>
      
    </div>
  )
}

export default Counter
