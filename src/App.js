import React, { Component } from 'react'
import './App.css'
import HOC from './components/HOC'
import Input from './components/hoc/Input'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

class App extends Component {

  constructor() {
    super()
    this.state = {
      context: {
        name: 'Tèo'
      }
    }
  }

  changeContext = () => {
    const name = this.state.context.name === 'Tèo' ? 'Bành Thị Bưởi 5 Roi' : 'Tèo'
    this.setState({
      context: {
        ...this.state.context,
        name
      }
    })
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact/a">Contact A</Link>
              </li>
              <li>
                <Link to="/contact/b">Contact B</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

