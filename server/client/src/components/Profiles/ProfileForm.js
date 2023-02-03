// ProfileForm shows a form for a user to update profile inputs
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
// import { Link } from 'react-router-dom';

class ProfileForm extends Component {
  render() {
    return (
      <div>
        <h1>Update Profile</h1>
        <form>
          <div>
            <label htmlFor="position">Position(s): </label>
            <Field name="position" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="level">Highest level of basketball you've played: </label>
            <Field name="level" component="select">
              <option value="Recreational" default>Recreational</option>
              <option value="Experienced">Experienced</option>
              <option value="Competitive">Competitive</option>
              <option value="Elite">Elite</option>
            </Field>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'profileForm',
  destroyOnUnmount: false
})(ProfileForm);