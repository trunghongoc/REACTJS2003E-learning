import React, { Component } from 'react'

export default class Child extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Nguyễn Văn A'
    }
  }

  showAlert() {
    alert('Component con')
  }

  render() {
    return (
      <div>
        <p>Component Con</p>
        <input value="Nguyễn Văn A"/>
      </div>
    )
  }
}
