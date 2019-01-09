import React, { Component } from 'react'
import { Container, Navbar, NavItem, Nav, Badge } from 'reactstrap'
import DropDown from './Dropdown'
import { Icon } from 'react-icons-kit'
import { search } from 'react-icons-kit/feather/search'
import { smallLeft } from 'react-icons-kit/entypo/smallLeft'
import { smallRight } from 'react-icons-kit/entypo/smallRight'
import { calendar } from 'react-icons-kit/entypo/calendar'
import { list } from 'react-icons-kit/feather/list'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <Nav className="mr-auto">
            <DropDown selectID={this.props.selectID} showAll={this.props.showAll}/>
            <Icon style={{ color: '#B045BA' }} size={19} icon={list} />
            <p>Pending</p>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Icon style={{ color: '#B045BA' }} size={15} icon={search} />
            </NavItem>
            <NavItem>
              <Icon style={{ color: '#B045BA' }} size={15} icon={smallLeft} />
              <Icon size={15} icon={calendar} />Today, Jan 10th
              <Icon style={{ color: '#B045BA' }} size={15} icon={smallRight} />
            </NavItem>
            <NavItem>
              <Badge color="danger" pill>1 d</Badge>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar 