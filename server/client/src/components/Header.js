import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <li><a href="/auth/google">Login With Google</a></li> 
        );
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li> 
        );
      default:
        return (
          <>
            <li><a href="/profiles">Players</a></li>
            <li><a href="/runs/new">Add a Run</a></li>
            <li><a href="/runs">Join a Run</a></li>
            <li><a href="/api/logout">Logout</a></li>
          </>
        )
    }
  }

  render() {
    return (
      <nav>
        <div>
          <Link 
            to={'/'} 
          >
            Swishsesh
          </Link>
          <ul>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)