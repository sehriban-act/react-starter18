import React from 'react';
import UserItem from './UserItem';

const UserContainer = ({ users }) => {
  console.log('Rendering: User Container Comp.');
  return (
    <div className="users">
      <button id="add-button" onClick={null}>
        Add User
      </button>
      {users?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserContainer;
