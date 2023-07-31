import React from 'react';
import '../styles/navbar-1.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
       <Link to='/'><span>Home</span></Link>
       <Link to='/exercises-for-fitness'><span>Get Started</span></Link>
       <Link to='/exercise'><span>Get Fit</span></Link>
       <Link to='/'><span>Blog</span></Link>
       <Link to='/'><span>About</span></Link>
      </nav>
    </div>
  )
}
