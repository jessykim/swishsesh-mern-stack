// RunSignup shows users run info and option to signup
import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import * as actions from '../../actions';
import { fetchRun, signupRun } from '../../actions'
import { Link } from 'react-router-dom';

class RunSignup extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.runId, 'RUN ID')
    const runId = this.props.match.params.runId
    this.props.fetchRun(runId)
  }

  render() {
    const run = this.props.run
    const runId = this.props.match.params.runId
    console.log(this.props)
    const history = this.props.history
    // console.log(history.location.pathname, 'HISTORY')
    // const profileId = this.props.auth?.profile._id
    // console.log(profileId, 'PRO ID')
    
    return (
      <div>
        <h1>Join the Run</h1>
        <section>
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
        </section>
        <section>
          <h2>Continue to Sign Up!</h2>
          <div>Player: {this.props.auth?.profile.name}</div>
        </section>
        <button>
          <Link to={`/runs/${runId}`}>
            Back
          </Link>
        </button>
        <button
          onClick={() => {signupRun(runId, history)}}
        >
          Join Run
        </button>
      </div>
    )
  };
};

function mapStateToProps({ run, auth }) {
  console.log(auth, "STATE")
  return { run, auth };
}

export default connect(mapStateToProps, { fetchRun })(withRouter(RunSignup))