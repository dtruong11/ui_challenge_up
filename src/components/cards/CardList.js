import React, { Component } from 'react';
import { Container } from 'reactstrap'
import Card from './Card'
import '../../styles/cards.css'
import { Icon } from 'react-icons-kit'
import { iosPlus } from 'react-icons-kit/ionicons/iosPlus'

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
            quantity={el.availableQuantity}
            status={el.currentWorkflow}
            open={el.open}
            discard={el.discard}
          />
        })}
        <div className='add_card'>
          <div>
            <Icon size={35} icon={iosPlus} />
            <p className='add_txt'>Create a Service Card</p>
          </div>
        </div>
      </Container>
    )

  }
}

export default CardList 