import React from 'react'
import Link from 'next/link'
import{UserButton,useUser}from '@clerk/clerk-react';
const Header = () => {
  const {user}=useUser()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link active" aria-current="page" href="/user">Profile</Link>
              </li>
              </ul>
              <ul className="navbar-nav ms-auto">
              <li className="nav-item me-2 text-white">
                {user?.firstName?.toUpperCase()}
              </li>
              <li className='nav-item me-2'><UserButton/></li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header
