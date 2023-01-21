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
    // console.log(this.props.runs, 'PROPS')
    return (
      <>
        <h1>{this.props.runs.location}</h1>
        <h3>{this.props.runs.address}</h3>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Run Details</h1>
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