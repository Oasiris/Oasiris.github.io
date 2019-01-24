import React, { Component } from 'react'
import './styles/Header.scss'

// export default class ContentHeader extends Component {
//   render() {
//     return (
//       <h3 id={this.}
//     )
//   }
// }

const ContentHeader = props => (
  <h3 id={props.id} className="hasHeaderLink growSlighter">
    <div className="hiddenLink" id={`${props.id}_`}></div>
    <a className="jumpLink unselectable" href={`#${props.id}_`}>#</a>
    <span style={{cursor: 'default'}}>
      {props.children}
    </span>
  </h3>
)

export default ContentHeader