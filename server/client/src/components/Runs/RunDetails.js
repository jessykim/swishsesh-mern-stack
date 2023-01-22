import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRun } from '../../actions'

class RunDetails extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.runId)
    const runId = this.props.match.params.runId
    this.props.fetchRun(runId)
  }

  renderRun() {
    console.log(this.props.runs, 'PROPS')
    const runs = this.props.runs
    return (
      <div>
        <h1>{runs.start}</h1>
        <section>
          <div>
            <div>Location</div>
            <div>{runs.location}</div>
            <div>{runs.address}</div>
          </div>
          <div>
            <div>Game Time</div>
            <div>{runs.start}</div>
            <div>{runs.end}</div>
          </div>
          <div>
            <div>Cost (per person)</div>
            <div>{runs.cost}</div>
          </div>
          <div>
            <div>Spots Filled</div>
            <div>/{runs.spots}</div>
          </div>
          <div>
            <div>Game Format</div>
            <div>{runs.gameFormat}</div>
          </div>
          <div>
            <div>Host</div>
            <div>{runs.host.name}</div>
          </div>
        </section>
        <section>
          {/* <div>{runs.players}</div> */}
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

function mapStateToProps({runs}) {
  // console.log(runs, 'RUN')
  return { runs }
}

export default connect(mapStateToProps, { fetchRun })(RunDetails)