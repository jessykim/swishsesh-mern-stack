import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlayers } from '../../actions';

class PlayerList extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  renderPlayers() {
    return this.props.players.reverse().map(player => {
      return (
        <div className="card darken-1" key={player._id}>
          {player.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}

function mapStateToProps({ players }) {
  return { players };
}

export default connect(mapStateToProps, { fetchPlayers })(PlayerList);