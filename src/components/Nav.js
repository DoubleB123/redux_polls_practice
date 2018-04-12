import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul className='navlist'>
          <li className='navlist-li'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
           <li className='navlist-li'>
            <Link className='nav-link' to='/leaderboard'>Leaderboard</Link>
          </li>
          <li className='navlist-li'>
            <Link className='nav-link' to='/add'>Add Poll</Link>
          </li>
       </ul>
      </div>
    );
  }
}

export default Nav;