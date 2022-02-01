import React, { Component } from 'react'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" >     
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <big className="text-secondary">
              <big id="account" style={{ color: 'white' }}>Račun: {this.props.account}</big>
            </big>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
