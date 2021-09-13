import {Component} from 'react'
import './index.css'
import {doesNotMatch} from 'assert'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateNum = () => {
    const randomNum = Math.floor(Math.random() * 101)

    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="generate-btn" onClick={this.generateNum}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
