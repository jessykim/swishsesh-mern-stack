import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRun } from '../../actions'

class RunDetails extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.runId, 'RUN ID')
    const runId = this.props.match.params.runId
    this.props.fetchRun(runId)
  }

  renderRun() {
    // console.log(this.props.run, 'PROPS')
    const run = this.props.run
    console.log(run, 'RUN INFO')
    const userId = this.props.auth.profile._id
    console.log(userId, 'USER')
    const found = run.players?.some(player => player._id === userId)
    console.log(found, 'FOUND?')

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
            <div>{run.start}</div>
            <div>{run.end}</div>
          </div>
          <div>
            <div>Cost (per person)</div>
            <div>{run.cost}</div>
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
              Remove Self
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

function mapStateToProps({ run, auth }) {
  // console.log(run)
  console.log(auth, 'sTATE')
  return { run, auth }
}

export default connect(mapStateToProps, { fetchRun })(RunDetails)