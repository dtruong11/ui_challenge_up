import React from 'react';
import { Card, CardImg, CardText, CardBody, CardFooter, CardTitle, Row, Col } from 'reactstrap'
import '../../styles/cards.css'

const SingleCard = ({ title, views, subscribers, price, pic, currency }) => {
  return (
    <div>
      <Card className='event_card'>
        <div>
          <div className='card_img'
            style={{
              background: `url('${pic}')`,
              height: '200px',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
        </div>
        {/* <CardImg top width="100%" src={pic} alt="Card image cap" /> */}
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
        <CardFooter>
          <Row>
            <Col>{currency} {price}</Col>
            <Col>{subscribers}</Col>
            <Col>{views}</Col>
          </Row>
        </CardFooter>
      </Card>
    </div>
  )

}

export default SingleCard  