import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <div className="logo">Pro Steel</div>
        <nav className="nav">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            
        </nav>
        <div className="language-switcher">
            <span>EN</span> | <span>ID</span>
        </div>
    </div>
  )
}

export default Header