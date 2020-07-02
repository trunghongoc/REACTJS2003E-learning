import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Sum extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('----props:', this.props)
  }

  render() {
    return (
      <>
        <p>Tổng a + b = ?</p>
      </>
    )
  }
}

export default withRouter(Sum)

// http://167.99.77.218/api/reactjs


// npm i -s axios

