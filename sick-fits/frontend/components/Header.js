import React from 'react'

import Nav from './Nav'

const Header = () => (
  <div>
    <Nav />
    <div className="bar">
      <a href="">Sick Fits</a>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
)

export default Header
