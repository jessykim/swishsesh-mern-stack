import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Runs from './Runs'
import AddRun from './AddRun'
import Players from './Players'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/runs" component={Runs} />
            <Route path="/runs/new" component={AddRun} />
            <Route path="/players" component={Players} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)