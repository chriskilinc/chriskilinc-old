import React, { Component } from 'react';
import './Expertise.css';

class Education extends Component {
  render() {
    return (
      <div className="education">
        <div className="expertise--item">
          <div className="education--container">
            <h1 className="title">Education</h1>

            <div className="education--items">
              <div className="education--item">
                <div className="education--item--titles">
                  <h2>Technical College Graduate</h2>
                  <h3>2015-2016</h3>
                </div>
                <div className="education--item--content">
                  <h3>Östra Gymnasiet</h3>

                  <h4>Master Thesis Report</h4>
                  <p>
                    (SMS Gateway Admin - Development of a web platform for
                    existing systems in administrative purposes)
                  </p>
                  <a
                    href="http://www.ostragymnasiet.se/index.php?sida=13&id=730"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Information about education program"
                  >
                    Course/Program Website
                  </a>
                </div>
              </div>

              <div className="education--item">
                <div className="education--item--titles">
                  <h2>Technical High School Graduate</h2>
                  <h3>2012-2015</h3>
                </div>
                <div className="education--item--content">
                  <h3>Östra Gymnasiet</h3>
                  <p>Information- and Media Technology 2500p</p>
                  <h4>Gymnasial Thesis Report</h4>
                  <p>
                    Computer Game created in Unity game engine and written in c#
                  </p>
                  <a
                    href="http://www.ostragymnasiet.se/index.php?sida=13&id=476"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Information about education program"
                  >
                    Course/Program Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
