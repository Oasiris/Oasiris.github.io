import React, { Component } from 'react'
import './../css/footer.css'

// import './../css/global.css'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container">
          <h2><span className="corner-square" />2018 David Hong.</h2>
          <h3>Hosted on GitHub. Powered by React.</h3>
          <h4>This website's design was inspired by the interfaces of a variety of video games, including the Wipeout and Splatoon series.</h4>
        </div>
        
      </div>
    );
  }
}