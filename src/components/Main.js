// import React, { Component } from 'react';
import React from 'react';
import * as loremIpsum from 'fast-lorem-ipsum'
// import logo from './img/logo.svg';
import './styles/Main.scss';

import ContentHeader from './ContentHeader'
import Work from './Work'
import Contact from './Contact'


const Nav = () => (
  <nav className="navbar">
    <ul className="nav unselectable">
      {/* Note: tabindex="0" enables 'focus' animations on Safari. */}
      <li><a tabindex="0" href='#work_' className="grow">Work</a></li>
      <li><a tabindex="0" href='#about_' className="grow">About</a></li>
      <li><a tabindex="0" href='#resume_' className="grow">Resume</a></li>
      <li><a tabindex="0" href='#contact_' className="grow">Contact</a></li>
    </ul>
  </nav>
)


const Header = (props) => (
  <section className="header">
    <h3 className="title">{props.children}</h3>
    {/* <h5 className="subtitle">I write code and do some other wacky things.</h5> */}
    <h6 className="subtitle">I'm David. I write code, design websites, and make stuff.</h6>
  </section>
)


const Footer = () => (
  <section id="footer" className="unselectable">
    <hr />
    <h5>2019. Hosted on Github. Powered by React.</h5>
  </section>
)

const About = () => (
  <div id="aboutContent">
    I'm David, a developer, designer, and musician from the San Francisco bay area. I study at Brown University.
    <pbr />
    Building, modding, and hacking things is my greatest love—whether it's hardware, software, art, or music.
    <pbr />
    I worked for three summers at <a className="superlink" href="https://shop.hellowynd.com/" target="_blank">Wynd</a>, a Silicon Valley startup, where I wrote code to scrape 6,000+ air pollutant data points in 25+ countries around the world from open online databases.
    <br />
    I also wrote the company's Node.js style guidelines & docs galore.
    <pbr />
    When I'm not coding, drawing, or making music, you can usually find me improvising piano or playing old-school video games.
  </div>
)

const Resume = () => (
  <div id="resumeContent" style={{textAlign: 'center'}}>
    <button>Click to view Resume</button>
  </div>
)

const Main = props => {
  return (
    <div>
      <div className="container">
        <Header>The Davidverse.</Header>
        <Nav />


        <ContentHeader id="work">Work</ContentHeader>
        <Work />
        <ContentHeader id="about">About</ContentHeader>
        <About />
        <ContentHeader id="resume">Resume</ContentHeader>
        <Resume />
        <ContentHeader id="contact">Contact</ContentHeader>
        <Contact />

        <Footer />
      </div>
    </div>
  )
}


// class Main extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }


export default Main;