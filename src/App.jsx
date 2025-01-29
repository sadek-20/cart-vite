import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>
        Welcome to our store!
      </h1>
      <Outlet/>
      <p>
        Here, you'll find everything you need to make the most of your shopping experience.
      </p>
    </div>
  )
}

export default App