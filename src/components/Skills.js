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
                <h2>
                  <i className="fas fa-code" />JavaScript
                </h2>
                <div className="skills--col--content">
                  <p>React</p>
                  <p>Node</p>
                  <p>Knockout</p>
                </div>
              </div>
              <div className="skills--col">
                <h2>
                  <i className="fab fa-windows" />.NET
                </h2>
                <div className="skills--col--content">
                  <p>C#</p>
                  <p>ASP.NET/ MVC / WPF</p>
                  <p>Unity Engine</p>
                </div>
              </div>
              <div className="skills--col">
                <h2>
                  <i className="fab fa-html5" />HTML / CSS
                </h2>
                <div className="skills--col--content">
                  <p>HTML5</p>
                  <p>Css / Scss / Less</p>
                </div>
              </div>
              <div className="skills--col">
                <h2>
                  <i className="fas fa-database" />Infrastructure
                </h2>
                <div className="skills--col--content">
                  <p>Azure / DevOps</p>
                  <p>MongoDB / CosmosDB</p>
                  <p>MSSQL</p>
                  <p>Docker</p>
                </div>
              </div>
              <div className="skills--col">
                <h2>
                  <i className="fas fa-angle-right" />Other
                </h2>
                <div className="skills--col--content">
                  <p>Git</p>
                  <p>WordPress</p>
                  <p>MailChimp / SendGrid</p>
                  <p>Google Analytics</p>
                  <p>Splunk</p>
                </div>
              </div>
              <div className="skills--col">
                <h2>
                  <i className="fas fa-desktop" />Software
                </h2>
                <div className="skills--col--content">
                  <p>Visual Studio / Code</p>
                  <p>Fiddler</p>
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
