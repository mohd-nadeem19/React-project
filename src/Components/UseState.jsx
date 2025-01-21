import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);

    const handlerClick = () => {
        setCount(count +1);
        console.log(count)
    }

  return (
    <div>
        <button onClick={ handlerClick }>Increse Count</button>
        <h1>{count}</h1>
    </div>
  )
}

export default UseState