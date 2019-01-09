import React, { Component } from 'react';
import list from './data/cards'
import Navbar from './components/navbar/Navbar'
import CardList from './components/cards/CardList'


class App extends Component {
  constructor() {
    super()
    this.state = { 
      list,
      selectedID: ''
    }
  }

  selectID = (id) => {
    this.setState({
      selectedID: id
    })
  }

  showAll = () => {
    this.setState({
      selectedID: ''
    })
  }


  filterCards = () => {
    let campId = this.state.selectedID
    console.log('campId', campId)
    if (campId) {
      return list.filter(el => el.campaignId === campId)
    } else {
      return list
    }
  }

  render() {
    return (
      <div>
        <Navbar selectID={this.selectID} showAll={this.showAll}/>
        <CardList list={this.filterCards()} />
      </div>
    );
  }
}

export default App;
