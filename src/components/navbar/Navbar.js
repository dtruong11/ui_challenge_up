import React, { Component } from 'react'
import { Container, Navbar, NavItem, Nav, Badge, NavbarToggler, Collapse } from 'reactstrap'
import DropDown from './Dropdown'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/feather/search'
import { smallLeft } from 'react-icons-kit/entypo/smallLeft'
import { smallRight } from 'react-icons-kit/entypo/smallRight'
import { calendar } from 'react-icons-kit/entypo/calendar'
import { list } from 'react-icons-kit/feather/list'
const moment = require('moment');


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  currentTime = () => {
    return moment().format("ddd, MMM Do");
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className='navigation' light expand="md">
        <Container className='my-2'>
          <DropDown selectID={this.props.selectID} showAll={this.props.showAll} />
          <div className="mr-auto ml-4 pending">
            <Icon className='pending_icon' size={23} icon={list} />
            <p className='pending_txt'>Pending</p>
          </div>
          <NavbarToggler className="ml-auto" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className='nav_items'>
                <Icon style={{ color: '#686868' }} size={17} icon={search} />
              </NavItem>
              <NavItem className='icon_nav mx-4'>
                <Icon className='mr-4' size={15} icon={smallLeft} />
                <Icon className='mr-2' size={15} icon={calendar} />
                <span>{this.currentTime()}</span>
                <Icon className='ml-4' size={15} icon={smallRight} />
              </NavItem>
              <NavItem >
                <Badge className='nav_pill' pill>
                  <span className='pill_txt'>1 d</span>
                </Badge>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar 