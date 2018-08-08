import React, { Component } from 'react';
import './Expertise.css';

import Education from './Education';
import Skills from './Skills';

class Expertise extends Component {
  render() {
    return (
      <section id="expertise" className="expertise">
        <div className="expertise--container">
          <Education />
          <Skills />
        </div>
      </section>
    );
  }
}

export default Expertise;
