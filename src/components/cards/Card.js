import React, { Component } from 'react';
import { Card, CardBody, CardText, CardFooter, CardTitle, Row, Col } from 'reactstrap'
import { Icon } from 'react-icons-kit'
import { users } from 'react-icons-kit/feather/users'
import { eye } from 'react-icons-kit/feather/eye'
import { ecommerce_money } from 'react-icons-kit/linea/ecommerce_money'
import '../../styles/cards.css'

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress_bar">
      <div className="filler" style={{ width: `${percentage}%` }} />      
    </div>
  )
}

class SingleCard extends Component {  
  constructor(props) {
    super (props)
    this.state = {
      percentage: 100
    }
  }
  
  render(){
  let { title, views, subscribers, price, pic, currency } = this.props 
  return (
    <div className='event_card'>
      <Card>
        <div className='card_img'
          style={{
            background: `url('${pic}'), url('https://source.unsplash.com/random')`,
            height: '150px',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
        </div>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <div>
            <div className='status'>
              <div className='status_child'>$ 5000/ Month</div>
              <div className='status_child'>Live </div>
            </div>
            <ProgressBar percentage={this.state.percentage}/>
          </div>
        </CardBody>
        <CardFooter>
          <Row className='card_info'>
            <Col xs={5}>
              <CardText>
              <Icon size={15} icon={ecommerce_money}/>
              {currency} {price}
              </CardText></Col>
            <Col>
              <Row>
                <Col>
                  <Icon size={15} icon={users} />
                  <CardText>{subscribers}</CardText>
                </Col>
                <Col>
                  <Icon size={15} icon={eye} />
                  <CardText>{views}</CardText>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  )
}
}

export default SingleCard  