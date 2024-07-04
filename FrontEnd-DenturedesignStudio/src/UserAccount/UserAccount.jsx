import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserAccount.css';
import Home from '../homebutton/home';
import usericon from './usericon.png';
import DeleteConfirmationDialog from '../DeleteConfirmationDialog/DeleteConfirmationDialog';
import ResetConfirmationDialog from '../ResetConfirmationDialog/ResetConfirmationDialog';

const UserAccount = () => {
  const navigate = useNavigate();

  // Initial dummy user data
  const initialUsers = [
    { id: 1, username: 'Username_1' },
    { id: 2, username: 'Username_2' },
    { id: 3, username: 'Username_3' },
    { id: 4, username: 'Username_4' },
    { id: 5, username: 'Username_5' },
    { id: 6, username: 'Username_6' },
    { id: 7, username: 'Username_7' },
    { id: 8, username: 'Username_8' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);

  const handleDelete = (id) => {
    setSelectedUser(id);
  };

  const confirmDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setSelectedUser(null);
  };

  const cancelDelete = () => {
    setSelectedUser(null);
  };

  const handleResetConfirmation = (id) => {
    const user = users.find((user) => user.id === id);
    setSelectedUser(user);
    setShowResetConfirmation(true);
  };

  const handleResetPassword = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, password: 'new_password' } : user
    );
    setUsers(updatedUsers);
    setShowResetConfirmation(false);
  };

  const handleCancelReset = () => {
    setShowResetConfirmation(false);
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Salsa&display=swap" />
      <div className="useraccountpage">
        <header>
          <div className="home-icon">
            <Home onClick={() => navigate('/adminhome')} />
          </div>
          <h1>User Accounts</h1>
        </header>
        <div className="account-list">
          {users.map((user) => (
            <div key={user.id} className="account-item">
              <div className="username">
                <img src={usericon} alt="User Icon" className="user-icon" />
                {user.username}
              </div>
              <button onClick={() => handleDelete(user.id)} className="delete-button">
                Delete Account
              </button>
              <button onClick={() => handleResetConfirmation(user)} className="reset-button">
                Reset Password
              </button>
            </div>
          ))}
        </div>
        {selectedUser && (
          <DeleteConfirmationDialog
            user={users.find((user) => user.id === selectedUser)}
            onDelete={confirmDelete}
            onCancel={cancelDelete}
          />
        )}
        {showResetConfirmation && (
          <ResetConfirmationDialog
            username={selectedUser.username}
            onReset={handleResetPassword}
            onCancel={handleCancelReset}
          />
        )}
      </div>
    </>
  );
};

export default UserAccount;
