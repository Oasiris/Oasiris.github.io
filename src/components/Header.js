import React, { Component } from 'react'
import './../css/header.css'

import headerDiamond from './../svg/header-diamond.svg';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <h1 id="main-title">david hong</h1>
        <div id="header-desc">
          <span id="developer-desc" className="header-desc">developer</span>
          <span className="header-diamond">
            <img src={headerDiamond} alt="" id="header-diamond" />
          </span>
          <span id="designer-desc" className="header-desc">designer</span>
        </div>
      </div>
    );
  }
}