import { Link } from 'gatsby'
import React from 'react'


const Header = () => (
  <header className="header section site-header">
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Cereal Concept
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/nos-references" className="navbar-item">
              Nos Références
            </Link>
            <span className="navbar-item">
              <button data-target="#contact-modal" className="button is-primary is-rounded modal-button">Contact</button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  </header>
)

export default Header
