// RunForm shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
// import RunField from './RunField';

class RunForm extends Component {
  render() {
    return (
      <div>
        <h1>Schedule a Run</h1>
        <form onSubmit={this.props.handleSubmit(this.props.onRunSubmit)}>
          <div>
            <label htmlFor="start">Start</label>
            <Field name="start" component="input" type="datetime-local" />
          </div>
          <div>
            <label htmlFor="end">End</label>
            <Field name="end" component="input" type="datetime-local" />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <Field name="location" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <Field name="address" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="cost">Cost (per person)</label>
            <Field name="cost" component="input" type="number" />
          </div>
          <div>
            <label htmlFor="spots">Spots</label>
            <Field name="spots" component="input" type="number" />
          </div>
          <div>
            <label htmlFor="gameFormat">Game Format</label>
            <Field name="gameFormat" component="input" type="text" />
          </div>
          <button>
            <Link to="/runs">
              Cancel
            </Link>
          </button>
          <button type="submit">
            Next
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
