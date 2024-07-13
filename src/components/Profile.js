// src/components/Profile.js
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import gravatar from 'gravatar';

export default function Profile() {
  const displayNameRef = useRef();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const avatarUrl = gravatar.url(currentUser.email, { s: '200', r: 'pg', d: 'mm' });

  async function handleUpdateProfile(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      if (displayNameRef.current.value !== currentUser.displayName) {
        await currentUser.updateProfile({
          displayName: displayNameRef.current.value
        });
        setMessage('Profile updated successfully');
      }
    } catch {
      setError('Failed to update profile');
    }

    setLoading(false);
  }

  return (
    <>
      <h2>Profile</h2>
      {error && <alert>{error}</alert>}
      {message && <alert>{message}</alert>}
      <img src={avatarUrl} alt="Avatar" />
      <form onSubmit={handleUpdateProfile}>
        <label>Display Name</label>
        <input type="text" ref={displayNameRef} defaultValue={currentUser.displayName} />
        <button disabled={loading} type="submit">Update Profile</button>
      </form>
    </>
  );
}
