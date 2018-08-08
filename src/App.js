import React, { Component } from 'react';
import _ from 'underscore';
import './App.css';

import icon from './media/iconselfie.jpg';

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
      navState: 'normal-nav',
      navItems: [
        {
          id: 'about',
          isActive: false
        },
        {
          id: 'expertise',
          isActive: false
        },
        {
          id: 'contact',
          isActive: false
        }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.throttle(this.handleScroll), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scroll');
    _.throttle(this.handleNavPosition());
    // _.throttle(this.handleScrollPositions(), 10000)
  };

  handleNavPosition = () => {
    if (window.pageYOffset >= window.innerHeight - window.innerHeight / 10) {
      this.setState({
        navState: 'fixed-nav'
      });
    } else {
      this.setState({
        navState: 'normal-nav'
      });
    }
  };

  // handleScrollPositions = () => {
  //   if (window.pageYOffset <= window.innerHeight && window.pageYOffset <= window.innerHeight * 1) {
  //     if (this.state.currentActive !== null) {
  //       this.setState({
  //         currentActive: null
  //       });
  //       this.changeToActive(this.state.currentActive);
  //     }
  //   }

  //   else if (window.pageYOffset <= window.innerHeight * 1.9 && window.pageYOffset <= window.innerHeight * 1.9) {
  //     if (this.state.currentActive !== "about") {
  //       this.setState({
  //         currentActive: "about"
  //       });
  //       _.throttle(this.changeToActive(this.state.currentActive), 5000);
  //     }
  //   }

  //   else if (window.pageYOffset <= window.innerHeight * 2.8 && window.pageYOffset <= window.innerHeight * 2.8) {
  //     if (this.state.currentActive !== "expertise") {
  //       this.setState({
  //         currentActive: "expertise"
  //       });
  //       _.throttle(this.changeToActive(this.state.currentActive), 5000);
  //     }
  //   }

  //   else if (window.pageYOffset <= window.innerHeight * 3.7 && window.pageYOffset <= window.innerHeight * 3.7) {
  //     if (this.state.currentActive !== "contact") {
  //       this.setState({
  //         currentActive: "contact"
  //       });
  //       _.throttle(this.changeToActive(this.state.currentActive), 5000);
  //     }
  //   }
  // }

  changeToActive = id => {
    if (id != null) {
      let selectedIndex = this.state.navItems.findIndex(obj => obj.id === id);
      let selectedItem = _.find(this.state.navItems, function(item) {
        return item.id === id;
      });
      let newNavItems = [...this.state.navItems];
      newNavItems.forEach(item => (item.isActive = false));
      selectedItem.isActive = true;
      newNavItems.splice(selectedIndex, 1, selectedItem);
      this.setState({
        navItems: newNavItems,
        currentActive: selectedItem
      });
      this.removeHash();
    } else {
      let newNavItems = [...this.state.navItems];
      newNavItems.forEach(item => (item.isActive = false));
      this.setState({
        navItems: newNavItems
      });
    }
  };

  removeHash() {
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    );
  }

  render() {
    return (
      <div className="application">
        <Hero icon={icon} />
        <Navigation
          navItems={this.state.navItems}
          changeToActive={this.changeToActive}
          navState={this.state.navState}
        />
        <About navState={this.state.navState} />
        <Expertise />
        <Contact />
      </div>
    );
  }
}

export default App;
