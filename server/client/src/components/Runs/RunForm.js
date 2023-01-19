// RunForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class RunForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onRunSubmit)}>
          <div>
            <label>Start</label>
            <input type="datetime-local"></input>
          </div>
          <div>
            <label>End</label>
            <input type="datetime-local"></input>
          </div>
          <div>
            <label>Location</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Address</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Cost (per person)</label>
            <input type="number" min="0"></input>
          </div>
          <div>
            <label>Spots</label>
            <input type="number" min="0"></input>
          </div>
          <div>
            <label>Game Format</label>
            <input type="text" placeholder="Optional"></input>
          </div>
          <button>
            <Link to="/runs">
              Cancel
            </Link>
          </button>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'runForm',
  destroyOnUnmount: false
})(RunForm);
