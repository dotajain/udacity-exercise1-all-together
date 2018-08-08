import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      userName: '',
    },
    userExists: false,
  }
  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState(currentState => ({
      ...currentState,
      user: {
        ...currentState.user,
        [name]: value,
      },
    }))
  }
  isUserNameExist = currentUsername => {
    const users = this.props.users;
    for(let user of users) {
      if (user.userName === currentUsername) {
        return true;
      }
    }
    return false;
  }
  handleSubmit = e => {
    e.preventDefault();
    const userExists = this.isUserNameExist(this.state.user.userName);
    if (!userExists) {
    	this.props.onAddUser(this.state.user);
    }
    this.setState(() => ({
      userExists,
    }));
  }

  isDisabled = () => {
    const { firstName, lastName, userName } = this.state.user;
    return firstName === '' || lastName === '' || userName === '';
  }

  render() {
    const { firstName, lastName, userName } = this.state.user;

    return (
      <div>
			<h2>Add New User</h2>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="firstName">First Name</label>
					<input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={this.handleOnChange}
                    />
				</div>
				<div>
					<label htmlFor="lastName">Last Name</label>
					<input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={this.handleOnChange}
                    />
				</div>
				<div>
					<label htmlFor="userName">Username</label>
					<input
                      type="text"
                      name="userName"
                      placeholder="Username"
                      value={userName}
                      onChange={this.handleOnChange}
                    />
				</div>
				<button type="submit" disabled={this.isDisabled()}>Add</button>
			</form>
			{this.state.userExists ? (
          		<p className="error">You cannot add a user that already exists.</p>
             ) : (
               ''
             )}
		</div>
    )
  }
};

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
