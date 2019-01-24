// import React, { Component } from 'react';
import React from 'react';
import * as loremIpsum from 'fast-lorem-ipsum'
// import logo from './img/logo.svg';
import './styles/Main.scss';

import ContentHeader from './Header'


const Nav = () => (
  <nav className="navbar unselectable">
    <ul className="nav">
      <li><a href='#work'>Work</a></li>
      <li>About</li>
      <li>Resume</li>
      <li>Contact</li>
    </ul>
  </nav>
)


const Header = () => (
  <section className="header">
    <h3 className="title">David Hong.</h3>
    {/* <h5 className="subtitle">I write code and do some other wacky things.</h5> */}
    <h6 className="subtitle">I write code, design websites, and do other wacky things.</h6>
  </section>
)


const Main = props => {
  return (
    <div>
      <div className="container">
        <Header />
        <Nav />


        <ContentHeader id="work">Work</ContentHeader>
        <ContentHeader id="about">About</ContentHeader>
        <ContentHeader id="resume">Resume</ContentHeader>
        <ContentHeader id="contact">Contact</ContentHeader>
        <p>
          Sample paragraph.

          {loremIpsum("1000w")}
        </p>
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