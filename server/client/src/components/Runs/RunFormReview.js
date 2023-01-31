// RunFormReview shows users their form inputs for review
// import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
// import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const RunFormReview = ({ onCancel, formValues, submitRun, history }) => {
  // console.log(formValues['start'])
  const startTime = new Date(formValues['start'])
  const newStart = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(startTime)
  // console.log(newStart, 'NEW START')
  
  const endTime = new Date(formValues['end'])
  const newEnd = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(endTime)

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <label>Start</label>
        <div>{newStart}</div>
      </div>
      <div>
        <label>End</label>
        <div>{newEnd}</div>
      </div>
      <div>
        <label>Location</label>
        <div>{formValues['location']}</div>
      </div>
      <div>
        <label>Address</label>
        <div>{formValues['address']}</div>
      </div>
      <div>
        <label>Cost (per person)</label>
        <div>{formValues['cost']}</div>
      </div>
      <div>
        <label>Spots</label>
        <div>{formValues['spots']}</div>
      </div>
      {!formValues['gameFormat'] ? 
        <></>
      : 
        <div>
          <label>Game Format</label>
          <div>{formValues['gameFormat']}</div> 
        </div>
      }
      <button
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitRun(formValues, history)}
      >
        Complete Run
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.runForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(RunFormReview));