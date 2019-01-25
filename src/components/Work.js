import React, { Component } from 'react'
import PageGrid from './PageGrid'
import GridItem from './GridItem'
// import gridSy from './styles/PageGrid.module.scss'

import slateMidiMain from './img/slate-midi-ctrl-main.png'


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

          <GridItem 
            img={slateMidiMain}
            name="Arduino Midi Controller"
            subtitle='"Slate"'
            date="2015"
            type="hardware"
            id="#slate">
            <p>Sample content</p>  
          </GridItem>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />

        </PageGrid>

      </>
    )
  }
}
