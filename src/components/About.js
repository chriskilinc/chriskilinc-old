import React, { Component } from 'react';
import AboutContent from '../components/AboutContent';
import './About.css';

class About extends Component {
  render() {
    return this.props.navState !== 'fixed-nav' ? (
      <section id="about" className="about">
        <AboutContent />
      </section>
    ) : (
      <section id="about" className="about spacer">
        <AboutContent />
      </section>
    );
  }
}

export default About;
