import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from 'reactstrap'
import ProgressBar from './ProgressBar'
import Edit from './Edit'
import { Icon } from 'react-icons-kit'
import { users } from 'react-icons-kit/feather/users'
import { eye } from 'react-icons-kit/feather/eye'
import { database } from 'react-icons-kit/feather/database'
import { circle } from 'react-icons-kit/fa/circle'
import '../../styles/cards.css'


class SingleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropDown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  checkStatus = (status) => {
    if (status === 'saved') {
      return <div className='stat'>
        <span className='stat_txt'>Saved</span>
        <Icon icon={circle} className='saved' size={7} />
      </div>
    } else if (status === 'rejected') {
      return <div className='stat'>
        <span className='stat_txt'>Rejected</span>
        <Icon icon={circle} className='rejected' size={7} />
      </div>
    } else if (status === 'live') {
      return <div className='stat'>
        <span className='stat_txt'>Live</span>
        <Icon icon={circle} className='live' size={7} />
      </div>
    }
  }

  footer = (status, currency, price, subscribers, views) => {
    if (status === 'rejected') {
      return (<CardFooter>
        <div className='card_footer'>
          <p className='warning'>This card is on hold</p>
          <p>Resubmit</p>
        </div>
      </CardFooter>)
    } else {
      return (<CardFooter>
        <div className='card_footer'>
          <div>
            <Icon className='footer_icon' size={15} icon={database} />
            <span>{currency} {price}</span>
          </div>
          <div>
            <Icon className='footer_icon' size={15} icon={users} />
            <span>{subscribers}</span>
          </div>
          <div>
            <Icon className='footer_icon' size={15} icon={eye} />
            <span>{views}</span>
          </div>
        </div>
      </CardFooter>)
    }
  }

  render() {
    let { title, views, subscribers, price, pic, currency, quantity, status, open, discard } = this.props
    let percentage = parseFloat(((open + discard) / quantity * 100).toFixed(1))

    return (
      <Card className='event_card'>
        <div>
          <div className='card_img'
            style={{
              backgroundImage: `url('${pic}'), url('https://source.unsplash.com/WLUHO9A_xik/1600x900')`
            }}>
          </div>
          <Edit />
        </div>

        <CardBody>
          <CardTitle className='card_title'>{title}</CardTitle>
          <div className='status'>
            <div className='status_child'>$ {quantity * price}/ Month</div>
            <div className='workflow'>
              {this.checkStatus(status)}
            </div>
          </div>
          <div>
            <ProgressBar percentage={percentage} />
          </div>
        </CardBody>
       {
         this.footer(status, currency, price, subscribers, views)
       }
      </Card>
    )
  }
}

export default SingleCard  