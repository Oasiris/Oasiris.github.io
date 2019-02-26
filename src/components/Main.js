import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'

const Cool = () => <h1>Hello world!</h1>

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}
