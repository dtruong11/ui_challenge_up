import React, { Component } from 'react';
import model from './models/requests'
import Navbar from './components/navbar/Navbar'
import CardList from './components/cards/CardList'


class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      selectedID: ''
    }
  }

  componentDidMount = async () => {
    let cards = await model.getCards()
    let data = cards.data.cards
    this.setState({
      list: data 
    })
  }

  selectID = (id) => {
    this.setState({
      selectedID: id
    })
  }

  // show all campaigns
  showAll = () => {
    this.setState({
      selectedID: ''
    })
  }

  // filter campaigns based on campaignID
  filterCards = () => {
    let campId = this.state.selectedID
    let list = this.state.list;
    if (campId) return list.filter(el => el.campaignId === campId)
    else return list
  }

  render() {
    return (
      <div>
        <Navbar selectID={this.selectID} showAll={this.showAll} />
        <CardList list={this.filterCards()} />
      </div>
    );
  }
}

export default App;
