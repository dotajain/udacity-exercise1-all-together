import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  state = {
    showNumberOfGames: true,
  }
  toggleNumberOfGamesPlayed = () => {
    this.setState(oldState => ({
      showNumberOfGames: !oldState.showNumberOfGames,
    }));
  }
  render() {
    const { showNumberOfGames } = this.state;
    const { users } = this.props;
	
	const toggleGameButton = (
      <div>
        <button onClick={this.toggleNumberOfGamesPlayed}>
          {showNumberOfGames ? 'Hide ' : 'Show '}
          the Number of Games Played
        </button>
      </div>
    );
    return (
      <div>
      	<h2>Users</h2>
      	{users && users.length > 0 ? toggleGameButton : ''}
      	<ol>
          {users.map(user => (
            <User key={user.username} user={user} showNumberOfGames={showNumberOfGames} />
          ))}
        </ol>
      </div>
    )
  }
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
