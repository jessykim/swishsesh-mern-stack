import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Welcome to Swishsesh
      </h1>
      <Link to="/runs">
        <button>Join a Run</button>
      </Link>
    </div>
  )
}

export default Landing