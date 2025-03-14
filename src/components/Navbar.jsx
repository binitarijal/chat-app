import React from 'react'
import './styles/navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="logo">
      <h2>My App</h2>
    </div>
    <div class="auth-buttons">
      <button class="google-btn sign-in-btn">Sign In with Google</button>
      <span class="welcome-message">Welcome, User</span>
      <button class="google-btn sign-out-btn">Sign Out</button>
    </div>
  </nav>
  )
}

export default Navbar