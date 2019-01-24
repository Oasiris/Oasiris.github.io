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
  <h3 id={props.id} className="hasHeaderLink">
    <a class="jumpLink" href={`#${props.id}`}>#</a>
    {props.children}
  </h3>
)

export default ContentHeader