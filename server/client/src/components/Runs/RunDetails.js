import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRun } from '../../actions'

class RunDetails extends Component {
  componentDidMount() {
    console.log(this.props.match.params.runId, 'RUN ID')
    const runId = this.props.match.params.runId
    this.props.fetchRun(runId)
  }

  renderRun() {
    console.log(this.props.run, 'PROPS')
    const run = this.props.run

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
            <div>{run.players.length} / {run.spots}</div>
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
                <th></th>
              </tr>
            </thead>
            {/* <tbody>
              {run.players.forEach(player => {
                <tr>
                  <td>{player}</td>
                  <td>{player}</td>
                  <td>{player}</td>
                  <td>{player}</td>
                </tr>
              })}
            </tbody> */}
          </table>
        </section>
        <section>
          <Link to={`/runs/${run._id}/signup`}>Join Run</Link>
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

function mapStateToProps({run}) {
  // console.log(run)
  return { run }
}

export default connect(mapStateToProps, { fetchRun })(RunDetails)