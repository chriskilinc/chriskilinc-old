import React, { Component } from 'react';

class AboutContent extends Component {
  render() {
    return (
      <div className="about--container">
        <h1>Hello!</h1>
        <p>
          I am a social and outgoing person with a great interest in technology
          and how things work.
        </p>
        <p>
          I want to surround myself with kind, focused and inspirational people
          who burn for what they do.
        </p>
        <p>
          I am currently working as an consultant Software Developer at{' '}
          <b>If P&C Insurance</b> by assignment of <b>Sigma AB.</b>
        </p>
        <p>
          In my free time I enjoy playing music, exercising, learning Game
          Development as well as experimenting with IoT solutions such as
          Raspberry Pi, z-wave and OpenHab.
        </p>
      </div>
    );
  }
}

export default AboutContent;
