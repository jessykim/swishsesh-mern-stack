import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions';

class ProfilesList extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchProfiles();
  }

  renderProfiles() {
    return this.props.profiles.map(profile => {
      console.log(profile)
      return (
        <div key={profile._id}>
          {profile.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderProfiles()}
      </div>
    );
  }
}

function mapStateToProps({ profiles}) {
  return { profiles };
}

export default connect(mapStateToProps, { fetchProfiles })(ProfilesList);