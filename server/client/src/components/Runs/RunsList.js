import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRuns } from '../../actions'

class RunsList extends Component {
  componentDidMount() {
    this.props.fetchRuns()
  }

  renderRuns() {
    return this.props.runs.map(run => {
      console.log(run)
      return (
        <div key={run._id}>
          {run.location}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderRuns()}
      </div>
    )
  }
}

function mapStateToProps({ runs }) {
  return { runs }
}

export default connect(mapStateToProps, { fetchRuns })(RunsList)