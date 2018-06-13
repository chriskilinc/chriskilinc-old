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
                <a href="https://github.com/chriskilinc" target="_blank"><i class="fab fa-github"></i></a>
                <p>Github</p>
              </div>
            </div>

            <div className="contact--item">
              <div className="contact--item--container">
                <a href="https://www.linkedin.com/in/chriskilinc/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <p>Linkedin</p>
              </div>
            </div>

            <div className="contact--item">
              <div className="contact--item--container">
                <a href="" target="_blank"></a>
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