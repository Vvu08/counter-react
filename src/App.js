import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount( count + 1)
  }

  const Decrement = () => {
    setCount( count - 1)
  }

  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <h2 className='display-4'>Counter</h2>
      <h1 className='fw-bold display-1 m-3 mt-1'>{count}</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <button onClick={Increment} className='fw-bold m-1 btn btn-outline-primary shadow-sm'>+</button>
        <button onClick={Decrement} className='fw-bold m-1 btn btn-outline-primary shadow-sm'>-</button>
      </div>
    </div>
  );
}

export default App;
