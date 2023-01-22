import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRuns } from '../../actions'
import { Link } from 'react-router-dom'

class RunsList extends Component {
  async componentDidMount() {
    await this.props.fetchRuns()
  }

  renderRuns() {
    return this.props.runsArr.map(run => {
      return (
        <button key={run._id}>
          <Link to={`/runs/${run._id}`}>
            {run.location}
            {run.address}
            {run.start}
            {run.spots}
          </Link>
        </button>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>List of Runs</h1>
        {this.renderRuns()}
      </div>
    )
  }
}

function mapStateToProps({ runs }) {
  // console.log(runs, 'RUNS')
  const runsArr = Array.from(runs)
  return { runsArr }
}

export default connect(mapStateToProps, { fetchRuns })(RunsList)