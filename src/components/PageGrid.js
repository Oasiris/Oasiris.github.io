import React, { Component } from 'react'

export default class PageGrid extends Component {
  render() {
    const {children} = this.props;
    if (typeof children !== 'object') return null;

    // let len = this.props.children ? this.props.children.length : 0;
    

    return (
      <div>
        {/* {len} */}
        {children.length}
        {typeof children}
      </div>
    )
  }
}
