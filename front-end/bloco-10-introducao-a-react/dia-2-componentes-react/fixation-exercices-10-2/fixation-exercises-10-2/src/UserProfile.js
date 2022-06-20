import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <li key={this.props.user.id}>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        <img
          src={this.props.user.avatar}
          alt={'avatar of ' + this.props.user.id}
        />
      </li>
    );
  }
}

export default UserProfile;
