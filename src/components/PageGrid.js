import React, { Component } from 'react'
import style from './styles/PageGrid.module.scss'

export default class PageGrid extends Component {
  render() {
    const {children} = this.props;
    if (typeof children !== 'object') return null;

    // let len = this.props.children ? this.props.children.length : 0;
    

    return (
      <div className={style.gridWrapper}>
        <div className={style.grid}>
          {/* {children.length} */}
          {/* {typeof children} */}
          {children}
        </div>
      </div>
    )
  }
}
