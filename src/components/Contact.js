import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="contact--container">
          <div className="contact--items">
            <div className="contact--item">
              <div className="contact--item--container">
                <a
                  href="https://github.com/chriskilinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Website Github"
                  title="Porfolio over at github.com"
                >
                  <i class="fab fa-github" />
                </a>
                <p>Github</p>
              </div>
            </div>

            <div className="contact--item">
              <div className="contact--item--container">
                <a
                  href="https://www.linkedin.com/in/chriskilinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Website Linkedin"
                  title="Porfolio over at linkedin.com"
                >
                  <i class="fab fa-linkedin" />
                </a>
                <p>Linkedin</p>
              </div>
            </div>

            <div className="contact--item">
              <div className="contact--item--container">
                <p>+46 736 647 293</p>
                <p>chriskilinc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
