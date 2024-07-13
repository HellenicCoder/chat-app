// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to ChatApp</h1>
      <Link to="/chat">Enter Chat Room</Link>
    </div>
  );
}

export default Home;
