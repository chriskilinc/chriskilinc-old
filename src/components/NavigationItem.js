import React, { Component } from 'react';
import './Navigation.css';

class NavigationItem extends Component {

  handleOnClick = () =>{
    // console.log("click "+this.props.id);
    this.props.changeToActive(this.props.id);
  }

  render() {
    return (
      this.props.isActive ? 
      <a href={"#"+this.props.id} className="active" onClick={this.handleOnClick}>{this.props.id}</a>
      :
      <a href={"#"+this.props.id} onClick={this.handleOnClick}>{this.props.id}</a>
    );
  }
}

export default NavigationItem;