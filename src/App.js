import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushis: [],
      startingIndex: 0,
      wallet: 100,
      sushiInMyBelly: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(json => {
      // debugger
      this.setState({
        sushis: json
      })
    })
  }

  chooseFour = () => {
    return this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4)
    // this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4) -> .slice(0, 4)
    // this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4) -> .slice(4, 8)
    // this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4) -> .slice(8, 12)
  }

  nextFour = () => {
    // console.log("hey next four triggered");
    // console.log("-----");
    this.setState({
      startingIndex: this.state.startingIndex + 4
      // this.state.startingIndex = 0 + 4
      // startingIndex = 4
    })
  }

  eatSushi = sushi => {
    // debugger
    this.setState({
      wallet: this.state.wallet - sushi.price,
      sushiInMyBelly: [
        ...this.state.sushiInMyBelly,
        sushi
      ]
    })
  }

  render() {
    console.log("state is", this.state);
    console.log("----------");
    return (
      <div className="app">
        <SushiContainer sushis={this.chooseFour()} nextFour={this.nextFour} eatSushi={this.eatSushi}/>
        <Table wallet={this.state.wallet} sushiInMyBelly={this.state.sushiInMyBelly} />
      </div>
    );
  }
}

export default App;
