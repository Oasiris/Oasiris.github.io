import React, { Component } from 'react'

import gridSy from './styles/PageGrid.module.scss'
import reactLogo from './img/logo.svg'


const Flourish = () => (
  <div className={gridSy.flourish}>
    <svg width="2.2rem" height="1.0rem">
      <rect width="1.0rem" height="1.0rem" x="1.2rem" />
      <rect width="0.3rem" height="1.0rem" x="0.6rem" />
      <rect width="0.3rem" height="1.0rem" />
    </svg>
  </div>
)


export default class GridItem extends Component {
  render() {
    // Setup
    const imgStyle = !(this.props.img) ? null : {
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: '100% 100%'
    };

    const nameUpper = this.props.name ? this.props.name.toUpperCase() : '';

    // —————

    return (
      <div className={gridSy.gridItem} tabIndex="0">
        <div className={gridSy.itemWrapper} style={imgStyle}>


          <div className={gridSy.item}>
            <div className={gridSy.itemOverlay} />
            <div className={gridSy.displayTitle}>
              <p>{nameUpper}</p>
            </div>
            {/* {maybeImg} */}
            {/* {this.props.children} */}
          </div>
        </div>

        <Flourish />
      </div>

    )
  }
}
