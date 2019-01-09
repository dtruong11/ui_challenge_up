import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import campaigns from '../../data/campaigns'

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      campaigns,
      selected: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  select = (event) => {
    this.setState({
      selected: event.target.value
    })
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.state.selected ? this.state.selected : "All Campaigns"}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem value='All Campaigns' 
            onClick={(e) => {
              this.select(e)
              this.props.showAll()
            }}>
            All Campaigns
          </DropdownItem>
          {campaigns.map((el, idx) => {
            return <DropdownItem key={idx} value={el.campaignName} 
            onClick={(event) => {
              this.select(event)
              this.props.selectID(el.id)
            }
            }>
            {el.campaignName}
            </DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDown