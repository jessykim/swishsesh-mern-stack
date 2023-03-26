import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRun, deleteRun } from '../../actions'
import { Link, withRouter } from 'react-router-dom'

class RunDetails extends Component {
  async componentDidMount() {
    // console.log(this.props.match.params.runId, 'RUN ID')
    // await this.props.fetchUser()
    const runId = this.props.match.params.runId
    await this.props.fetchRun(runId)
  }

  renderRun() {
    // console.log(this.props.user, 'USER')
    const runId = this.props.match.params.runId
    // console.log(this.props.match.params.runId, 'RUN ID')

    const run = this.props.run
    console.log(run, 'RUN INFO')
    const userId = this.props.user?.profile._id
    // console.log(userId, 'USER')
    const found = run.players?.some(player => player._id === userId)
    // console.log(found, 'FOUND?')

    // const startDate = run.start
    // const endDate = run.end
    // const sameDate = startDate.toDateString() === endDate.toDateString()

    // console.log(startDate, 'START DATE')
    // console.log(sameDate, 'SAME DATE?')
    
    // console.log(this.props.history, 'HISTORY')
    const history = this.props.history

    return (
      <div>
        <h1>{run.start}</h1>
        <section>
          <div>
            <div>Location</div>
            <div>{run.location}</div>
            <div>{run.address}</div>
          </div>
          <div>
            <div>Game Time</div>
            {
            // sameDate ?
            // `${sameDate}`
            // :
            // `${endDate}`
              // `${startDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} - ${startDate.toLocaleDateString([], { hour: 'numeric', minute: 'numeric' })} to ${endDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}` 
              // : 
              // `${startDate.toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}`
            }
            <div>{run.start}</div>
            <div>{run.end}</div>
          </div>
          <div>
            <div>Cost (per person)</div>
            <div>${run.cost}</div>
          </div>
          <div>
            <div>Spots Filled</div>
            <div>{run.players?.length} / {run.spots}</div>
          </div>
          <div>
            <div>Game Format</div>
            <div>{run.gameFormat}</div>
          </div>
          <div>
            <div>Host</div>
            <div>{run.host?.name}</div>
          </div>
          <div>
            {run.host?._id === userId ? 
              <button onClick={() => {deleteRun(runId);history.push('/runs')}}>
                Delete
              </button> 
            : 
              <></>
            }
          </div>
        </section>
        <section>
          <h2>Confirmed Players</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Skill</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {run.players?.map((player, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{player.name}</td>
                    <td>{player?.level}</td>
                    <td>{player?.position}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>
        <section>
          <button>
            <Link to={'/runs'}>Back</Link>
          </button>
          {(!found) ?
            <button>
              <Link to={`/runs/${run._id}/signup`}>Join Run</Link>
            </button>
            :
            <button>
              <Link to={`/runs/${run._id}/remove`}>Remove Self</Link>
            </button>
          }
        </section>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderRun()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state, 'STATE')
  return { run: state.run, user: state.auth }
}

export default connect(mapStateToProps, { fetchRun })(withRouter(RunDetails))