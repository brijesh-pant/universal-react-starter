import React, { Component } from 'react'

class App extends Component {

  static displayName = 'App'

  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    return (
      <h1
        onClick={ this.handleClick }
      >
        Universal React Starter <span>{this.state.count}</span>
      </h1>
    )
  }
}

export default App
