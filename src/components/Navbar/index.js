import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Goby
          </Link>
          <Link to="/balances" className="btn btn-link navbar-btn">
            Your balances
          </Link>
          <Link to="/ticker-add" className="btn btn-link navbar-btn">
            Add event
          </Link>
        </div>
      </nav>
    )
  }
}
