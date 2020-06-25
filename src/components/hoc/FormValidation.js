import React, { Component } from 'react'

const FormValidation = InputComponent => class extends Component {
  render() {
    return (
      <>
        <div className="input-control">
          <InputComponent {...this.props} {...this.state}/>
        </div>
      </>
    )
  }
}

export default FormValidation
