import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'

export default class Parent extends Component {
  componentDidMount() {
    console.log(this.refs.myChild)
    const child = ReactDOM.findDOMNode(this.refs.myChild)
    console.log(child)
    child.style.color = 'red'
    const name = child.getElementsByTagName('input')[0]
    console.log(name.value)
  }

  render() {
    return (
      <>
        <p>Component Cha</p>
        <Child ref="myChild"/>
        <button>Gọi hàm trong child</button>
      </>
    )
  }
}
