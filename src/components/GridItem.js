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
    const {children} = this.props;
    const hasContent = !!(children);

    const imgStyle = !(this.props.img) ? null : {
      backgroundImage: `url(${this.props.img})`,
      backgroundSize: 'cover'
    };

    const year = this.props.date ? this.props.date : '';
    const nameUpper = this.props.name ? this.props.name.toUpperCase() : '';
    const subtitleUpper = 
      this.props.subtitle ? this.props.subtitle.toUpperCase() : '';
    const categoryText = this.props.type ? toCategoryText(this.props.type) : 'Miscellaneous Project';

    // If no content
    const maybeUnselectable = hasContent ? '' : 'unselectable';  // This doesn't do anything that I've noticed ATM
    
    // —————

    return (
      <div className={`${gridSy.gridItem} growSlight ${maybeUnselectable}`} tabIndex="0">
        <div className={gridSy.itemWrapper} style={imgStyle}>


          <div className={gridSy.item}>
            {hasContent && (
              <div className={gridSy.itemOverlay} />
            )}
            <span className={gridSy.itemNoHover}>
              <div className={gridSy.displayTitle}>
                <h5>{subtitleUpper}</h5>
                <div className={gridSy.displayIcon}>
                  {this.props.type === 'hardware' &&
                    <SolderIcon />
                  }
                </div>
                <h4>{nameUpper}</h4>
              </div>
            </span>

            {hasContent && (
              <div className={`${gridSy.itemOnHover} unselectable`}>
                <div className={gridSy.clickToSeeMore}>Click to see more</div>
                <h6 className={gridSy.focusYear}>{year}</h6>
                <h4 className={gridSy.focusTitle}>
                  {nameUpper}
                  <h5 className={gridSy.focusSubtitle}>{subtitleUpper}</h5>
                </h4>
                
                <div className={gridSy.focusCategory}>
                  {categoryText}
                </div>
              </div>
            )}

            {!hasContent && (
              <div class={gridSy.toolsIcon}>
                <div />
              </div>
            )}
            
          </div>
        </div>

        <Flourish />
      </div>

    )
  }
}
