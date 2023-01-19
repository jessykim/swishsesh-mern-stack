// RunFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
// import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const RunFormReview = ({ onCancel, formValues, submitRun, history }) => {
  const reviewFields = _.map(({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitRun(formValues, history)}
      >
        Add Run
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.runForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RunFormReview));