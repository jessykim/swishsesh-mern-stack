// RunForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import RunField from './RunField';
import formFields from './formFields';

class RunForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={RunField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onRunSubmit)}>
          {this.renderFields()}
          <Link to="/runs">
            Cancel
          </Link>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

// function validate(values) {
//   const errors = {};

//   errors.recipients = validateEmails(values.recipients || '');

//   _.each(formFields, ({ name }) => {
//     if (!values[name]) {
//       errors[name] = 'You must provide a value';
//     }
//   });

//   return errors;
// }

export default reduxForm({
  // validate,
  form: 'runForm',
  destroyOnUnmount: false
})(RunForm);
