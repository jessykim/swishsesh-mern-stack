// ProfileForm shows a form for a user to update profile inputs
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'  
import { reduxForm, 
  Field 
} from 'redux-form';
import { Link } from 'react-router-dom';
import { 
  submitProfile, 
  fetchProfile } from '../../actions';

class ProfileForm extends Component {
  componentDidMount() {
    const profileId = this.props.match.params.profileId
    // console.log(profileId, 'PROFILE ID')
    this.props.fetchProfile(profileId)
  }

  render() {
    const profile = this.props.profile
    const profileId = this.props.match.params.profileId
    const history = this.props.history
    const formValues = this.props.formValues
    console.log(formValues, 'FORM VALUES')
    // console.log(this.props, 'PROPS')
    
    const hasValues = formValues?.hasOwnProperty('values')
    // console.log(hasValues, 'TRUE OR FALSE')
    let values = {}
    if (hasValues) {
      values = formValues.values
      console.log(values, 'VALS')
    } else {
      values = { level: '', position: '' }
    }

    // const handleSubmit = () => submitProfile(profileId, values, history);console.log('submitted')
      
    // console.log(values, 'form values')
    return (
      <div>
        <h1>Update Profile</h1>
        <form 
        onSubmit={this.props.handleSubmit(submitProfile(profileId, values, history))}
        >
          <div>
            <label htmlFor="position">Position(s): </label>
            <Field name="position" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="level">Highest level of basketball you've played: </label>
            <Field name="level" component="select">
              <option />
              <option value="Recreational">Recreational</option>
              <option value="Experienced">Experienced</option>
              <option value="Competitive">Competitive</option>
              <option value="Elite">Elite</option>
            </Field>
          </div>
          <button>
            <Link to={`/profiles/${profile._id}`}>
              Cancel
            </Link>
          </button>
          <button type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state, 'STATE')
  // const hasValues = 'values' in state.form.profileForm
  // let formValues = {}
  // if (hasValues) {
  //   formValues = state.form.profileForm.values
  // } else {
  //   formValues = {}
  // }
  return { profile: state.profile, formValues: state.form.profileForm }
}

export default reduxForm({
  form: 'profileForm',
  destroyOnUnmount: false
})(connect(mapStateToProps, { fetchProfile })(withRouter(ProfileForm)))

// connect(mapStateToProps, { fetchProfile })
// (reduxForm({
//   form: 'profileForm',
//   destroyOnUnmount: true
// })
// (withRouter(ProfileForm))
// );