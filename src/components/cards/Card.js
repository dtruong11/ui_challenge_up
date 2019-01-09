import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap'
import ProgressBar from './ProgressBar'
import Edit from './Edit'
import { Icon } from 'react-icons-kit'
import { users } from 'react-icons-kit/feather/users'
import { eye } from 'react-icons-kit/feather/eye'
import { database } from 'react-icons-kit/feather/database'
import { circle } from 'react-icons-kit/fa/circle'
import { androidCreate } from 'react-icons-kit/ionicons/androidCreate'
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
      return <div>
        <span>Saved</span>
        <Icon icon={circle} className='saved' size={7} />
      </div>
    } else if (status === 'rejected') {
      return <div>
        <span>Rejected</span>
        <Icon icon={circle} className='rejected' size={7} />
      </div>
    } else if (status === 'live') {
      return <div>
        <span>Live</span>
        <Icon icon={circle} className='live' size={7} />
      </div>
    }
  }

  render() {
    let { title, views, subscribers, price, pic, currency, quantity, status, open, discard } = this.props
    let percentage = parseFloat((open / (Math.abs(quantity - discard)) * 100).toFixed(1))

    return (
      <Card className='event_card'>
        <div>
          <div className='card_img'
            style={{
              background: `url('${pic}'), url('https://source.unsplash.com/WLUHO9A_xik/1600x900')`,
              height: '150px',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          </div>
          {/* <div className='edit_btn'>
            <Icon className='pencil' style={{ color: '#FFA500' }} icon={androidCreate} size={15} />
          </div> */}
          <Edit />
        </div>

        <CardBody>
          <CardTitle>{title}</CardTitle>
          <div>
            <div className='status'>
              <div className='status_child'>$ {quantity * price}/ Month</div>
              <div className='status_child'>
                {this.checkStatus(status)}
              </div>
            </div>
            <ProgressBar percentage={percentage} />
          </div>
        </CardBody>
        <CardFooter>
          <div className='card_info'>
            <div>
              <Icon size={15} icon={database} />
              <span>{currency} {price}</span>
            </div>
            <div>
              <Icon size={15} icon={users} />
              <span>{subscribers}</span>
            </div>
            <div>
              <Icon size={15} icon={eye} />
              <span>{views}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    )
  }
}

export default SingleCard  