import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Card from './Card'
import '../../styles/cards.css'


class CardList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let list = this.props.list
    return (
      <Container className='cards_container'>
        {list.map((el, idx) => {
          return <Card
            key={idx}
            title={el.cardTitle}
            views={el.views}
            subscribers={el.subscribers}
            price={el.listOfPlans[0].price.amount}
            currency={el.listOfPlans[0].price.currencySymbol}
            pic={el.primaryMediaUrl}
          />
        })}
      </Container>
    )

  }
}

export default CardList 