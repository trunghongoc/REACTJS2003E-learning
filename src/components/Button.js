import React, { Component } from 'react'
import MyContext from './../context/ExContext'

class Button extends Component {ß
  render() {
    return (
      <>
        <button>Button trong trang Context: {JSON.stringify(this.context)}</button>
      </>
    )
  }
}

Button.contextType = MyContext

export default Button
