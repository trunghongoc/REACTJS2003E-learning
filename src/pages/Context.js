import React, { Component } from 'react'
import Button from './../components/Button'

export default class Context extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <p>Context</p>
        <Button/>
      </>
    )
  }
}
