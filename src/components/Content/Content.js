/**
 * Multi-class file.
 * 
 * This class exports the Content class. All other classes in this file will not
 * be particularly used outside of this Content class.
 * 
 * This class will represent the bulk of the main page's content.
 */

import React, { Component } from 'react';

// Importing other components
import ContentHeader from './ContentHeader'
import Border from './Border'
import BorderLink from './BorderLink'
import HexHeader from './HexHeader'
import SquareHeader from './SquareHeader'

import Dbr from './../General/Dbr'

// ——————————————————————————————

export default class Content extends Component {
  render() {
    return (
      <div id="content">
        <div className="container">
          {/* <ContentSectionWork /> */}
          <ContentSectionAbout />
          <ContentSectionContact />
        </div>
      </div>
    );
  }
}


// TODO: Implement Work section
// class ContentSectionWork extends Component {
//   render() {
//     return (<div />);
//   }
// }

// ——————————————————————————————


const ContentSectionAbout = () => (
  <div className="section" id="about-section">
    <ContentHeader desc="My essence, my mission">
      About
    </ContentHeader>
    <div className="row">
      <div className="col-md-6">
        <AboutIntroduction />
      </div>

      <div className="col-md-6">
        <AboutPortrait />
        <Border>
          {"David // Level 19 // Code Wizard // United States".toUpperCase()}
        </Border>
      </div>
    </div> {/* End of row */}
    <div id="resume-button">
      Click to view Resume
    </div>
  </div>
);

// Note: Bordered
const AboutIntroduction = () => (
  <Border>
    <HexHeader>Introduction</HexHeader>
    Developer, designer, artist, musican, aspiring polymath.
    <Dbr />
    I'm David. I'm from the Bay Area, California. 
    <br />              
    I study at <span className="hl-brown">Brown University</span>. 
    <br />
    I'm 19 years old and develop software, design user interfaces and 
    websites, build gadgets, create digital art, and compose music.
    <Dbr />
    I worked for three summers at <span className="hl-wynd">Wynd</span>, 
    where I taught myself JavaScript and wrote server code to scrape 
    6,000+ air pollutant data points in 25+ countries around the world 
    from open online databases. 
    <br />
    Eventually, I wrote the company's Node.js style guidelines & docs 
    galore.
    <Dbr />
    I have many passions, but I'm especially captivated by interactive 
    media, data science, and the intersections of computer science and 
    music.  
    <Dbr />
    I also play improv jazz piano and enjoy video games!
  </Border>
);

const AboutPortrait = () => (
  <Border>
    <SquareHeader>Artistic Rendition</SquareHeader>
    <div id="profile-pic">
    </div>
    <div id="profile-pic-caption">
      {"Portrait drawn by Catharine Ren".toUpperCase()}
    </div>
  </Border>
);

// ——————————————————————————————

const ContentSectionContact = () => (
  <div className="section" id="contact-section">
    <ContentHeader desc="Social media and other ways to get in touch">
      Contact
    </ContentHeader>
    <div className="my-row">
      <BorderLink href=""></BorderLink>
      <BorderLink href=""></BorderLink>
    </div>
    <div className="my-row">
      <BorderLink href="mailto:david_hong@brown.edu">david_hong@brown.edu</BorderLink>
    </div>
  </div>
);