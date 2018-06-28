import React from 'react'
import CounterButton from './CounterButton'

class CounterRow extends React.Component {
  state = {
    reset: false
  }

  componentWillReceiveProps() {
    this.setState({reset: this.props.reset})
  }

  render() {
    let button = []

    for (let index = 0; index < this.props.row; index++) {
      button[index] = <CounterButton reset={this.state.reset} />
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}

export default CounterRow
