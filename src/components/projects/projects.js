import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import ReactCardFlip from "react-card-flip";
import "react-vertical-timeline-component/style.min.css";

import "./projects.css";

function App() {
  const [view1, toggle1] = useState(0);
  const [view2, toggle2] = useState(0);
  const [view3, toggle3] = useState(0);
  const [view4, toggle4] = useState(0);

  return (
    <div className="App">
      <div id="projects" className="projects">
        <h1>Projects</h1>

        <div className="project-content">
          {/*Project 1  */}
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle1(1);
            }}
            onMouseLeave={() => {
              toggle1(0);
            }}
          >
            <h1>Tablify</h1>
            <ReactCardFlip isFlipped={view1} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/images/Tablify.PNG")}
                alt="Tablify"
              />
              <div className="reverse" key="back">
                <h1>
                  A simple, streamlined, and user-friendly web application that
                  allows restaurant owners and staff to build their custom
                  restaurant layout from scratch, assign customers to tables,
                  and track those customers' meals from start to finish.
                </h1>
                <h2>Developed with React Js </h2>
                <h3>Uses the MERN stack.</h3>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div>
                <a
                  href="https://guarded-stream-41487.herokuapp.com/"
                  target="new"
                >
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/kimiadarden/Tablify" target="new">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/*Project 2 */}

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle2(1);
            }}
            onMouseLeave={() => {
              toggle2(0);
            }}
          >
            <h1>Game Found</h1>
            <ReactCardFlip isFlipped={view2} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/images/game.PNG")}
                alt="Game Found"
              />
              <div className="reverse" key="back">
                <h1>
                  A game-finding application that will provide you with a wish
                  list of pertinent games to play based on provided criteria.{" "}
                </h1>
                <h2>Powered by RAWG Video Game Database API.</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div>
                <a
                  href="https://kevin-salamon.github.io/Game-Found/"
                  target="new"
                >
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/kimiadarden/Game-Found"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/*Project 3 */}

          <div
            className="project-item"
            onMouseEnter={() => {
              toggle3(1);
            }}
            onMouseLeave={() => {
              toggle3(0);
            }}
          >
            <h1>Google Books Search</h1>
            <ReactCardFlip isFlipped={view3} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/images/google.PNG")}
                alt="Google-Books-Search"
              />
              <div className="reverse" key="back">
                <h1>
                  An application that utilizes the Google Book API to search for
                  books and save it to user's favorite list.
                </h1>
                <h2>Developed with React Js</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div>
                <a href="https://guarded-meadow-59793.herokuapp.com/">
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a href="https://github.com/kimiadarden/Google-Books-Search">
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>

          {/*Project 4 */}
          <div
            className="project-item"
            onMouseEnter={() => {
              toggle4(1);
            }}
            onMouseLeave={() => {
              toggle4(0);
            }}
          >
            <h1>Employee Directory</h1>
            <ReactCardFlip isFlipped={view4} flipDirection="horizontal">
              <img
                key="front"
                src={require("../../assets/images/employee.PNG")}
                alt="Employee-Directory"
              />
              <div className="reverse" key="back">
                <h1>
                  An application to Sort and filter through the Employee
                  directory in order to find the relative information regarding
                  each employee.{" "}
                </h1>
                <h2>Developed with React Js and Powered with Bootstrap</h2>
              </div>
            </ReactCardFlip>

            <div className="options">
              <div>
                <a
                  href="https://pure-reaches-34018.herokuapp.com/"
                  target="new"
                >
                  Launch <FontAwesomeIcon icon={faPlayCircle} />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/kimiadarden/Employee-Directory"
                  target="new"
                >
                  Source
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
