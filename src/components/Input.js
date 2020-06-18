import React from 'react'

class Input extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  setValue = event => {
    const value = event.target.value
    this.setState({
      value
    })
  }

  render() {
    return (
      <>
        <input
          onChange={this.setValue}
          type="text"
          value={this.state.value} />
        <p>{ this.state.value }</p>
      </>
    )
  }
}

export default Input
