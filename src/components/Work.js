import React, { Component } from 'react'
import PageGrid from './PageGrid'
import GridItem from './GridItem'
// import gridSy from './styles/PageGrid.module.scss'

import slateMidiMain from './img/slate-midi-ctrl-main.png'
import oceanMidiMain from './img/ocean-midi-ctrl-main.png'
import mapCollectiveMain from './img/map-collective-ss-jan19-main.jpg'
import paintedPianoMain from './img/painted-piano-coldplay-main.jpg'


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
            img={mapCollectiveMain}
            name="Map-Collective"
            subtitle="Social 3D Web App"
            date="2019"
            type="web"
            id="#mapper"
            >
            <p>Sample content</p>
          </GridItem>

          <GridItem />

          <GridItem />

          <GridItem
            img={oceanMidiMain}
            name="Teensy Midi Controller"
            subtitle='"Ocean"'
            date="2018"
            type="hardware"
            id="#ocean">
            <p>Sample content</p>
          </GridItem>

          <GridItem 
            img={slateMidiMain}
            name="Arduino Midi Controller"
            subtitle='"Slate"'
            date="2015"
            type="hardware"
            id="#slate">
            <p>Sample content</p>  
          </GridItem>

          

          <GridItem
            img={paintedPianoMain}
            name="Painted Piano"
            subtitle="Coldplay-inspired"
            date="2014"
            type="Art"
            id="#coldplay-piano"
            >
            <p>Sample content</p>
          </GridItem>

        </PageGrid>

      </>
    )
  }
}
