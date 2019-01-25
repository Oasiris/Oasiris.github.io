import React, { Component } from 'react'

import gridSy from './styles/PageGrid.module.scss'

export default class GridItem extends Component {
  render() {
    return (
      <div>
        <div className={gridSy.itemWrapper}>
          <div className={gridSy.item}>
            {this.props.children}
          </div>

        </div>

        <div className={gridSy.flourish}>
          <svg width="2.2rem" height="1.0rem">
            <rect width="1.0rem" height="1.0rem" x="1.2rem"/>
            <rect width="0.3rem" height="1.0rem" x="0.6rem" />
            <rect width="0.3rem" height="1.0rem"  />
          </svg>
        </div>
      </div>

    )
  }
}
