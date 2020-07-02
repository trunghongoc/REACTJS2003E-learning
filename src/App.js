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
import Sum from './pages/Sum'
import Context from './pages/Context'
import MyContext from './context/ExContext'
import STL from './pages/ThreejsSTL'
import STL2 from './pages/STL2'

class App extends Component {

  constructor() {
    super()
    this.state = {
      context: {
        name: 'Nguyễn Văn A',
        class: '2E'
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
    const props = this.props
    return (
      <>
        <MyContext.Provider value={this.state.context}>
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
                <li>
                  <Link to="/sum/1/8">Tính tổng</Link>
                </li>
                <li>
                  <Link to="/context">Context</Link>
                </li>

                <li>
                  <Link to="/threejs-stl-2">Threejs stl 2</Link>
                </li>
              </ul>

              <hr />

              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/contact">
                  <Contact/>
                </Route>
                <Route exact params path="/sum/:a/:b">
                  <Sum/>
                </Route>
                <Route exact path="/context">
                  <Context a="6"/>
                </Route>
                <Route exact path="/threejs-stl-2">
                  <STL2/>
                </Route>
              </Switch>
            </div>
          </Router>
        </MyContext.Provider>
      </>
    );
  }
}

export default App;

