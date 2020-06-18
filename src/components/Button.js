import React from 'react'

class Button extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log('----constructor')
  }

  increment = () => {
    this.setState({
      count: this.state.count + this.props.count
    })
  }

  componentWillMount() {
    console.log('----componentWillMount')
  }

  componentDidMount() {
    console.log('----componentDidMount')
  }

  componentWillReceiveProps() {
    console.log('----componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('----shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('-----componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('------componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('-----componentWillUnmount')
  }

  render() {
    console.log('----render')

    return (
      <div>
        <button
          style={{ background: this.props.bg }}
          onClick={() => this.increment()}>Tăng biến đếm</button>
        <p>Giá trị hiện tại: {this.state.count}</p>
      </div>
    );
  }
}

export default Button
