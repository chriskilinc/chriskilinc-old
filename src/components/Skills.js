import React, { Component } from 'react';
import './Expertise.css';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="expertise--item">
          <div className="skills--container">
            <h1 className="title">Expertise</h1>
            <div className="skills--row">
              <div className="skills--col">
                <h2><i className="fas fa-code"></i>JavaScript</h2>
                <div className="skills--col--content">
                  <p>ReactJs</p>
                  <p>NodeJs</p>
                  <p>p5.js</p>
                </div>
              </div>
              <div className="skills--col">
                <h2><i className="fab fa-windows"></i>.NET</h2>
                <div className="skills--col--content">
                  <p>C#</p>
                  <p>ASP.NET/ MVC / WPF</p>
                  <p>Unity Engine</p>
                </div>
              </div>
              <div className="skills--col">
                <h2><i className="fab fa-html5"></i>HTML / CSS</h2>
                <div className="skills--col--content">
                  <p>HTML5</p>
                  <p>CSS / SCSS ( BEM )</p>

                </div>
              </div>
              <div className="skills--col">
                <h2><i className="fas fa-database"></i>Databases</h2>
                <div className="skills--col--content">
                  <p>MSSQL</p>
                  <p>MongoDB</p>
                  <p>Azure Blob / Table</p>
                </div>
              </div>
              <div className="skills--col">
                <h2><i className="fas fa-angle-right"></i>Other</h2>
                <div className="skills--col--content">
                  <p>Git</p>
                  <p>WordPress</p>
                  <p>MailChimp</p>
                  <p>Google Analytics</p>
                </div>
              </div>
              <div className="skills--col">
                <h2><i className="fas fa-desktop"></i>Software</h2>
                <div className="skills--col--content">
                  <p>Visual Studio / Code</p>
                  <p>Unity Engine</p>
                  <p>Photoshop</p>
                  <p>Blender</p>
                  <p>Fruity Loops Studio</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;