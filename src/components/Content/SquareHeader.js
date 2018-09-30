import React, { Component } from 'react'
import PropTypes from 'prop-types'


const SquareHeader = ({ children }) => {
  const titleText = children.toUpperCase();
  return (
    <div className="square-header">
      <div className="square-symbol" />
      <div className="square-header-text">{titleText}</div>
    </div>
  );
};

SquareHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default SquareHeader;
