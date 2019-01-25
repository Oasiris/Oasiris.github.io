import React, { Component } from 'react'
import PageGrid from './PageGrid'
import GridItem from './GridItem'
// import gridSy from './styles/PageGrid.module.scss'


export default class Work extends Component {

// May come in handy
// https://css-tricks.com/clipping-masking-css/

  render() {
    return (
      <>
        {/* Work here */}

        <PageGrid>
          {/* <h1>Yo</h1> */}
          {/* <div><div>What's up</div></div> */}
          {/* <div className={gridSy.item} /> */}
          {/* <div className={gridSy.item} /> */}
          {/* <div className={gridSy.item} /> */}
          {/* <div className={gridSy.item} /> */}

          {/* <div className={gridSy.itemWrapper}>
            <div className={gridSy.item} />
          </div>

          <div className={gridSy.itemWrapper}>
            <div className={gridSy.item} />
          </div>

          <div className={gridSy.itemWrapper}>
            <div className={gridSy.item} />
          </div>

          <div className={gridSy.itemWrapper}>
            <div className={gridSy.item} />
          </div> */}

          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />

        </PageGrid>

      </>
    )
  }
}
