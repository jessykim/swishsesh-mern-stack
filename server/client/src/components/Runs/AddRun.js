// AddRun shows AddRunForm and AddRunFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import RunForm from './RunForm';
import RunFormReview from './RunFormReview';

class AddRun extends Component {
  state = { showRunReview: false };

  renderContent() {
    if (this.state.showRunReview === true) {
      return <RunFormReview onCancel={() => this.setState({ showRunReview: false })} />
    }
    return <RunForm onRunSubmit={() => this.setState({ showRunReview: true })} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'runForm'
})(AddRun);
