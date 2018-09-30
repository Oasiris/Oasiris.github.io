
/**
 * Single-class file.
 * 
 * This class represents the clickable button variant of the rectangularly 
 * shaped, bracket-like borders that encloses many elements of the website.
 */

import React, { Component } from 'react'

import Border from './Border'

const BorderButton = ({ children, onClick }) => (
  <div className="border-button" onClick={onClick}>
    <Border>
      {children}
    </Border>
  </div>
);

BorderButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BorderButton;

// export default class Border extends Component {
//   constructor(props) {
//     super(props)
//   }



//   render() {
//     return (
//     <div class="border-button">
//       <Border>
//         {this.props.children}
//       </Border>
//     </div>
//     );
//   }
// }