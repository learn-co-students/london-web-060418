import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makePokemonRequest, createUser, loginUser, getCurrentUser } from './adapter/adapter'
import PokemonContainer from './pokemon/PokemonContainer'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import NotFound from './util/NotFound'
import Nav from './util/Nav'
import AuthAction from './auth/AuthAction'

class App extends Component {
  state = {
    current_user: null
  }

  postAuth = (data) => {
    if (data.error) {
      alert(data.error)
    } else {
      this.props.history.push('/pokemon')
      localStorage.setItem('token', data.token)
      this.updateCurrentUser(data.token)
    }
  }

  signIn = (username, password) => {
    createUser(username, password).then(this.postAuth)
  }

  login = (username, password) => {
    loginUser(username, password).then(this.postAuth)
  }


  logOut = () => {
    this.setState({
      current_user: null
    })
    this.props.history.push('/login')
    localStorage.clear()
  }

  updateCurrentUser = (token) => {
    getCurrentUser(token).then(data => {
      if (data.error) {
        this.logOut()
      } else {
        this.setState({
          current_user: data
        })
      }
    })
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.updateCurrentUser(localStorage.getItem('token'))
    }
  }

  render() {
    return (
      <div className="App">
        <Nav user={this.state.current_user} logOut={this.logOut} />
        <div style={{paddingTop: "63px"}}>
          <Switch>
            <Route path="/pokemon" render={() => {
              return <PokemonContainer user={this.state.current_user} />
            }} />
            <Route path="/signup" render={() => {
              return <AuthAction header="Sign Up!" submit={this.signIn} />
            }} />
            <Route path="/login" render={() => {
              return <AuthAction header="Log In" submit={this.login} />
            }} />
            <Route path="/404" component={NotFound} />
            <Route path="/" render={() => {
              return <Redirect to="/pokemon" />
            }} />
            <Redirect to="/404" />
          </Switch>
        </div>

      </div>
    );
  }
}

export default withRouter(App);
