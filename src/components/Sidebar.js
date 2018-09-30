import React, { Component } from 'react'

// ——————————————————————————————

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <SideLogo />
        <SideNav />
      </div>
    );
  }
}
// ——————————————————————————————

function SideLogo() {
  return (
    <div id="side-logo">
      <span>david</span>
      <span>hong</span>
    </div>
  );
}

function SideNav(props) {
  return (
    <div id="side-nav">
      <ul id="nav-items">
        {/* <li>Work</li> */}
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}