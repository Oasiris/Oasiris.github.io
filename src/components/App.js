import React, { Component } from 'react';

import './../css/App.css';

// import logo from './../svg/logo.svg';

// Importing the other components
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'
import Sidebar from './Sidebar'

// —————————————————————————

class App extends Component {
  render() {
    return (
      <div id="app-outer">
        <Sidebar />
        <Header  />
        <Content />
        <Footer  />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
