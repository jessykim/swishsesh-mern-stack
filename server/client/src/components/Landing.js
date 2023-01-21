import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Landing = ({ auth }) => {
  console.log(auth)
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Welcome to Swishsesh
      </h1>
      {auth ? 
        <Link to="/runs">
          <button>Join a Run</button>
        </Link>
      : 
        <div>Please login to view runs</div>
      }
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Landing)