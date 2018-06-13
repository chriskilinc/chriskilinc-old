import React, { Component } from 'react';
import _ from 'underscore';
import './App.css';

import icon from './media/iconselfie.png';

import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Expertise from './components/Expertise';
import Contact from './components/Contact';


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentActive: null,
      navState: "normal-nav",
      navItems: [
        {
          id: "about",
          isActive: false,
        },
        {
          id: "expertise",
          isActive: false,
        },
        {
          id: "contact",
          isActive: false,
        }
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight - (window.innerHeight / 10)) {
      this.setState({
        navState: "fixed-nav"
      });
    }
    else {
      this.setState({
        navState: "normal-nav"
      });
    }
  }

  changeToActive = (id) => {
    let selectedIndex = this.state.navItems.findIndex(obj => obj.id === id);
    let selectedItem = _.find(this.state.navItems, function (item) { return item.id === id });
    let newNavItems = [...this.state.navItems];
    newNavItems.forEach(item => item.isActive = false);
    selectedItem.isActive = true;
    newNavItems.splice(selectedIndex, 1, selectedItem);
    this.setState({
      navItems: newNavItems,
      currentActive: selectedItem
    });

    this.removeHash();
  }

  removeHash() {
    window.history.pushState("", document.title, window.location.pathname
      + window.location.search);
  }

  render() {
    return (
      <div className="application">
        <Hero icon={icon} />
        <Navigation navItems={this.state.navItems} changeToActive={this.changeToActive} navState={this.state.navState} />
        <About navState={this.state.navState} />
        <Expertise />
        <Contact />
      </div>
    );
  }
}

export default App;