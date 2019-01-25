import React, { Component } from 'react'

import gridSy from './styles/PageGrid.module.scss'
import { ReactComponent as SolderIcon } from './img/solder.svg'

const Flourish = () => (
  <div className={gridSy.flourish}>
    <svg width="2.2rem" height="1.0rem">
      <rect width="1.0rem" height="1.0rem" x="1.2rem" />
      <rect width="0.3rem" height="1.0rem" x="0.6rem" />
      <rect width="0.3rem" height="1.0rem" />
    </svg>
  </div>
)


const toCategoryText = category => {
  category = String(category);
  if (category.length === 0) return null;
  return category[0].toUpperCase() + category.substring(1) + 
  ' Project';
}


export default class GridItem extends Component {
  render() {
    // Setup
    const imgStyle = !(this.props.img) ? null : {
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: '100% 100%'
    };

    const nameUpper = this.props.name ? this.props.name.toUpperCase() : '';
    const subtitleUpper = 
      this.props.subtitle ? this.props.subtitle.toUpperCase() : '';
    const categoryText = this.props.type ? toCategoryText(this.props.type) : 'Miscellaneous Project';

    // —————

    return (
      <div className={gridSy.gridItem} tabIndex="0">
        <div className={gridSy.itemWrapper} style={imgStyle}>


          <div className={gridSy.item}>
            <div className={gridSy.itemOverlay} />
            <div className={gridSy.displayTitle}>
              <span className={gridSy.itemNoHover}>
                <h5>{subtitleUpper}</h5>
                <div className={gridSy.displayIcon}>
                  {this.props.type === 'hardware' &&
                    <SolderIcon />
                  }
                </div>
                
              </span>
              <h4>{nameUpper}</h4>
            </div>

            <div className={gridSy.itemOnHover}>
                <div className={gridSy.categoryText}>
                  {categoryText}
                </div>
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
