import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProfile } from '../../actions'
import { Link, withRouter } from 'react-router-dom'

class ProfileDetails extends Component {
  async componentDidMount() {
    const profileId = this.props.match.params.profileId
    await this.props.fetchProfile(profileId)
  }

  renderProfile() {
    // console.log(this.props.user, 'USER')
    // const profileId = this.props.match.params.profileId

    const profile = this.props.profile
    // console.log(run, 'RUN INFO')
    // const userId = this.props.user?.profile._id
    // console.log(userId, 'USER')
    // const found = run.players?.some(player => player._id === userId)
    // console.log(found, 'FOUND?')
    
    // console.log(this.props.history, 'HISTORY')
    // const history = this.props.history

    return (
      <div>
        <h1>Profile Details</h1>
        <section>
          <div>
            <img 
              src={profile.avatar} 
              alt={`${profile.name}'s avatar`} 
            />
            <div>{profile.name}</div>
          </div>
          <div>
            <div>Position:</div>
            <div>{profile.position}</div>
          </div>
          <div>
            <div>Level:</div>
            <div>{profile.level}</div>
          </div>
        </section>

        <section>
          <button>
            <Link to={'/'}>Back</Link>
          </button>
          <button>
            <Link to={`/profiles/${profile._id}/edit`}>Edit</Link>
          </button>
        </section>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderProfile()}
      </div>
    )
  }
}

function mapStateToProps({ profile }) {
  // console.log(state, 'STATE')
  return { profile }
}

export default connect(mapStateToProps, { fetchProfile })(withRouter(ProfileDetails))