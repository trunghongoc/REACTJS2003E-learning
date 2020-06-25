import React from 'react';

const MyHOC = ComposedComponent => class extends React.Component {
  componentDidMount() {
    this.setState({
      data: 'Data from HOC...'
    })
  }

  render() {
    return (
      <>
        <p>Đây là text trong HOC</p>
        <ComposedComponent {...this.props} {...this.state} />
      </>
    )
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data}</h1>
      </div>
    )
  }
}

export default MyHOC(MyComponent)
