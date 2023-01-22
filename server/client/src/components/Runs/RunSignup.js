// RunSignup shows users run info and option to signup
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import * as actions from '../../actions';
import { fetchRun, signupRun } from '../../actions'
import { Link } from 'react-router-dom';

class RunSignup extends Component {
  componentDidMount() {
    console.log(this.props.match.params.runId, 'RUN ID')
    const runId = this.props.match.params.runId
    this.props.fetchRun(runId)
  }

  render() {
    const run = this.props.run
    const runId = this.props.match.params.runId
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
        </section>
        <section>
          <div>If you agree to pay the cost (per person) and would like to join the run, please click the button below!</div>
        </section>
        <button>
          <Link to={`/runs/${runId}`}>
            Back
          </Link>
        </button>
        <button
          onClick={() => signupRun()}
        >
          Join Run
        </button>
      </div>
    )
  };
};

function mapStateToProps({ run }) {
  console.log(run, "STATE")
  return { run };
}

export default connect(mapStateToProps, { fetchRun })(RunSignup);