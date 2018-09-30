import React, { Component } from 'react'
import PropTypes from 'prop-types'


const HexHeader = ({ children }) => {
  const titleText = children.toUpperCase();
  return (
    <div className="hex-header">
      <div className="hex-symbol" />
      <div className="hex-header-text">{titleText}</div>
    </div>
  );
};

HexHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default HexHeader;

// export default class HexHeader extends Component {
//   constructor(props) {
//     super(props);
//   }

//   // TODO: Prop types
//   static propTypes = {
//     children: PropTypes.string.isRequired
//   }


//   // TODO: Default props

//   render() {
//     const titleText = this.props.children.toUpperCase();

//     return (
//       <div className="hex-header">
//         <div className="hex-symbol" />
//         <div className="hex-header-text">{titleText}</div>
//       </div>
//     );
//   }
// }