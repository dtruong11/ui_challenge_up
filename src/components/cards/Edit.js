import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Row, Col } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import { androidCreate } from 'react-icons-kit/ionicons/androidCreate'
import { edit } from 'react-icons-kit/feather/edit'
import '../../styles/cards.css'



class Edit extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    console.log('HELLO', this.state.dropdownOpen)
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <div className='edit_btn'>
            <Icon className='pencil' style={{ color: '#FFA500' }} icon={androidCreate} size={15} />
          </div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <div className='edit_options'>
              <div>
                <Icon icon={edit} size={18} />
              </div>
              <div className='edit_text'>
                Edit</div>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Edit 