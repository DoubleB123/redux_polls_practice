import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './styles/Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='navbar'>
        <ul className='navlist'>
          <li className='navlist-li'>
            <NavLink className='nav-link' to='/' exact activeClassName='active'>Home</NavLink>
          </li>
           <li className='navlist-li'>
            <NavLink className='nav-link' to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
          </li>
          <li className='navlist-li'>
            <NavLink className='nav-link' to='/add' activeClasseName='active'>Add Poll</NavLink>
          </li>
       </ul>
      </div>
    );
  }
}

export default Nav;