import React from 'react';
import PropTypes from 'prop-types';

const User = props => {
  //return JSX
  return (
    <li className="user">
      <p>Username: {props.user.userName}</p>
      <p>Number of Games Played: {props.showNumberOfGames ? props.user.numGamesPlayed : '*'}</p>
    </li>
  );
};

User.propTypes = {
  showNumberOfGames: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
