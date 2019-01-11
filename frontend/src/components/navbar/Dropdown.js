import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import model from '../../models/requests'


class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      selected: "",
      campaigns: []
    };
  }

  componentDidMount = async() => {
    let campaigns = await model.getCampaigns() 
    let data = campaigns.data.campaigns
    this.setState({
      campaigns: data 
    })
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
    let data = this.state.campaigns
    return (
      <Dropdown size="sm" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color='light' className='drop_toggle' caret>
          <span className='drop_txt'>
            {this.state.selected ? this.state.selected : "All Campaigns"}
          </span>
        </DropdownToggle>
        <DropdownMenu className='campaign_options'>
          <DropdownItem value='All Campaigns'
            onClick={(e) => {
              this.select(e)
              this.props.showAll()
            }}>
            All Campaigns
          </DropdownItem>
          {data.map((el, idx) => {
            return (
              <DropdownItem key={idx} value={el.campaignName}
                onClick={(event) => {
                  this.select(event)
                  this.props.selectID(el.id)
                }}>
                {el.campaignName}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDown