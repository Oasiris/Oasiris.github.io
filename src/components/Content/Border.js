/**
 * SIngle-class file.
 * 
 * This class represents the rectangularly shaped, bracket-like borders that
 * encloses many elements of the website.
 */

import React, { Component } from 'react'

const Border = ({ children }) => (
  <div className="borders">
    {children}
  </div>
);

export default Border;

// const SquareHeader = ({ children }) => {
//   const titleText = children.toUpperCase();
//   return (
//     <div className="square-header">
//       <div className="square-symbol" />
//       <div className="square-header-text">{titleText}</div>
//     </div>
//   );
// };

// SquareHeader.propTypes = {
//   children: PropTypes.string.isRequired
// };

// export default SquareHeader;

// export default class Border extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//     <div className="borders">
//       {this.props.children}
//     </div>
//     );
//   }
// }