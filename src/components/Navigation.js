import React, { Component } from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem';

// https://github.com/joshwnj/react-visibility-sensor
class Navigation extends Component {
  render() {
    return this.props.navState === 'normal-nav' ? (
      <nav className="navigation" ref="nav">
        <div className="navigation--container">
          {/* <NavigationItem isActive={true} id={"about"} changeActive={this.handleOnNavItemClick}/>
          <NavigationItem isActive={false} id={"experties"} changeActive={this.handleOnNavItemClick}/>
          <NavigationItem isActive={false} id={"contact"} changeActive={this.handleOnNavItemClick} /> */}
          {this.props.navItems.map(item => (
            <NavigationItem
              key={item.id}
              isActive={item.isActive}
              id={item.id}
              changeToActive={this.props.changeToActive}
            />
          ))}
        </div>
      </nav>
    ) : (
      <nav className="navigation fixed-nav" ref="nav">
        <div className="navigation--container">
          <p>/ Chriskilinc /</p>
          {this.props.navItems.map(item => (
            <NavigationItem
              key={item.id}
              isActive={item.isActive}
              id={item.id}
              changeToActive={this.props.changeToActive}
            />
          ))}
        </div>
      </nav>
    );
  }
}

export default Navigation;
