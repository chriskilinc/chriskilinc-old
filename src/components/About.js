import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      this.props.navState != "fixed-nav" ?
        <section id="about" className="about">
          <div className="about--container">
            <h1>Hello!</h1>
            <p>
              I am a social and outgoing person with a great interest in technology and how things work.
            </p>
            <p>
              I want to surround myself with focused and inspirational people who burn for what they do.
            </p>
            <p>
              I have recently registered a private company, Drevit. I build and sell specialized web applications.
            </p>
            <p>
              My time in addition to running the company, I play music, learn Game Development as well as experimenting with IOT solutions such as Raspberry Pi, z-wave and OpenHab.
            </p>
          </div>
        </section>
        :
        <section id="about" className="about spacer">
          <div className="about--container">
            <h1>Hello!</h1>
            <p>
              I am a social and outgoing person with a great interest in technology and how things work.
            </p>
            <p>
              I want to surround myself with focused and inspirational people who burn for what they do.
            </p>
            <p>
              I have recently registered a private company, Drevit. I build and sell specialized web applications.
            </p>
            <p>
              My time in addition to running the company, I play music, learn Game Development as well as experimenting with IOT solutions such as Raspberry Pi, z-wave and OpenHab.
            </p>
          </div>
        </section>
    );
  }
}

export default About;