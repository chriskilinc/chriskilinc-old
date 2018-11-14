import React, { Component } from 'react';
import '../App.css';

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="hero--icon-container">
          <img className="icon" src={this.props.icon} alt="Selfie Circle" />
        </div>
        <div className="hero--content">
          <h1>chriskilinc</h1>
          <div className="flex-break-row" />
          <p className="quote">Aspiring Software Developer</p>
        </div>
      </section>
    );
  }
}

export default Hero;
