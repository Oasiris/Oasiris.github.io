import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './../css/header.css'

import headerDiamond from './../svg/header-diamond.svg';

// —————————————————————————————————————

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <MainHeaderTitle text="david hong" />
        <MainHeaderSubtitle />
      </div>
    );
  }
}

// —————————————————————————————————————

function MainHeaderTitle({ text }) {
  return <h1 id="main-title">{text}</h1>;
}

MainHeaderTitle.propTypes    = { text: PropTypes.string.isRequired };
MainHeaderTitle.defaultProps = { text: 'david hong' };

// ——————————

function MainHeaderSubtitle() {
  return (
    <div id="header-desc">
      <span id="developer-desc" className="header-desc">
        developer
      </span>
      <span className="header-diamond">
        <img src={headerDiamond} alt="" id="header-diamond" />
      </span>
      <span id="designer-desc" className="header-desc">
        designer
      </span>
    </div>
  )
}