import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import RunsList from './Runs/RunsList'
import AddRun from './Runs/AddRun'
import Profiles from './Profiles'
import RunDetails from './Runs/RunDetails'
import RunSignup from './Runs/RunSignup'
import RunRemove from './Runs/RunRemove'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/runs" component={RunsList} />
            <Route exact path="/runs/new" component={AddRun} />
            <Route exact path="/runs/:runId" component={RunDetails} />
            <Route exact path="/runs/:runId/signup" component={RunSignup} />
            <Route exact path="/runs/:runId/remove" component={RunRemove} />
            <Route exact path="/profiles" component={Profiles} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)