
/**
 * Single-class file.
 * 
 * This class represents the clickable button variant of the rectangularly 
 * shaped, bracket-like borders that encloses many elements of the website.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import urlPropType from 'url-prop-type'

import Border from './Border'

const BorderLink = ({ children, href }) => (
  <a className="border-link" href={href}>
    <Border>
      {children}
    </Border>
  </a>
);

BorderLink.propTypes = {
  href: PropTypes.string.isRequired
};

export default BorderLink;

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