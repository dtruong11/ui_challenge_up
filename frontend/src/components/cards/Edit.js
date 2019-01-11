import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import { Icon } from 'react-icons-kit'
import { pencil } from 'react-icons-kit/fa/pencil'
import { edit } from 'react-icons-kit/feather/edit'
import { checkCircle } from 'react-icons-kit/feather/checkCircle'
import { trash2 } from 'react-icons-kit/feather/trash2'
import { share2 } from 'react-icons-kit/feather/share2'
import '../../styles/cards.css'


// EDIT DROPDOWN BUTTON 
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Dropdown className='edit_dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}>
          <div className='edit_btn'>
            <Icon className='pencil' icon={pencil} size={14} />
          </div>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <div className='edit_options'>
              <div>
                <Icon icon={edit} size={20} />
              </div>
              <div className='edit_text'>
                Edit
              </div>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <div className='edit_options'>
              <div>
                <Icon icon={checkCircle} size={20} />
              </div>
              <div className='edit_text'>
                Publish
              </div>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <div className='edit_options'>
              <div>
                <Icon icon={share2} size={20} />
              </div>
              <div className='edit_text'>
                Share
              </div>
            </div>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <div className='edit_options'>
              <div>
                <Icon icon={trash2} size={20} />
              </div>
              <div className='edit_text'>
                Delete
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Edit 