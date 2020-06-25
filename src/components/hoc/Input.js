import React, { Component } from 'react'
import FormValidation from './FormValidation'

class Input extends Component {
  render() {
    const { label, type } = this.props
    return (
      <>
        <label>{label}</label>
        <input
          type={type}
        />
      </>
    )
  }
}

Input.defaultProps = {
  type: 'radio'
}
export default FormValidation(Input)
