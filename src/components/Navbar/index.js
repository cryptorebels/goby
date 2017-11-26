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
          <Link to="/ticker-add" className="btn btn-default navbar-btn">
            Add
          </Link>
        </div>
      </nav>
    )
  }
}
