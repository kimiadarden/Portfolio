import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profile from "../assets/images/profile.JPG";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing">
          <Cell col={12}>
            <img
              src={profile}
              alt="Profile"
              className="profile-img"
              style={{ width: 350, height: 300, borderRadius: 300 / 2 }}
            />

            <div className="Profile-text">
              <h1>Full Stack Developer</h1>

              <p>
                I'm a full stack web developer who specializes in Javascript and
                React, with a background in NodeJS, MongoDB, Bootstrap, and
                more. I've a bachelor's degree in Electrical Engineering and
                worked on multiple Programming projects. Now, I'm working to
                develop responsive and functional websites utilizing MERN stack.
              </p>
              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB | Firebase{" "}
              </p>
              <div className="social">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kimia-darden/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/kimiadarden"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Email */}
                <a
                  title="Google"
                  className="fa"
                  href="mailto:kimiadarden@gmail.com"
                  target="new"
                >
                  <i className="fa fa-google" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
