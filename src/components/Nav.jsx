import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
      <div className="nav">
          <Link to="/home">
              <div>Home</div>
          </Link>

          <Link to="/about">
              <div>About</div>
          </Link>

          <Link to="/nasaList">
              <div>NasaList</div>
          </Link>
      </div>
      
  )
}

export default Nav
