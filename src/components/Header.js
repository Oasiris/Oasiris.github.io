import React, { Component } from 'react'
import './../css/header.css'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1 id="main-title">david hong</h1>
        <div id="header-desc">
          <span id="developer-desc" className="header-desc">developer</span>
          <span className="header-diamond"></span>
          <span id="designer-desc" className="header-desc">designer</span>
        </div>
      </div>
    );
  }
}