import React, { Component } from 'react';
import list from './data/cards'
import Navbar from './components/navbar/Navbar'
import CardList from './components/cards/CardList'


class App extends Component {
  constructor() {
    super()
    this.state = { list }
  }

  render() {
    return (
      <div>
        <Navbar />
        <CardList list={list} />
      </div>
    );
  }
}

export default App;
