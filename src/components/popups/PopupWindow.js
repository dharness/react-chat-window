import React, { Component } from 'react';


export default ({ isOpen, children }) => (
  <div className="sc-popup-window">
    <div className={`sc-popup-window--cointainer ${isOpen ? '' : 'closed'}`}>
      <input className="sc-popup-window--search" placeholder="Search emoji..."/>
      {children}
    </div>
  </div>
)