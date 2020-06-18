import React from 'react';
import Button from './components/Button'
import List from './components/List'
import Input from './components/Input'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: true,
      bg: 'green'
    }
  }

  toggleBg = () => {
    const newBg = this.state.bg === 'green' ? 'red' : 'green'
    this.setState({
      bg: newBg
    })
  }

  render() {
    return (
      <div>
        <Button
          count={2}
          bg={this.state.bg}/>

        <button onClick={() => this.toggleBg()}>Thay đổi màu</button>

        <List/>

        <Input/>
      </div>
    );
  }
}

export default App;
