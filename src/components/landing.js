import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing">
          <Cell col={12}>
            <img
              src="https://www.jumpstarttech.com/files/2018/08/Network-Profile.png"
              
              alt="Profile"
              className="profile-img"
            />

            <div className="Profile-text">
              <h1>Full Stack Developer</h1>

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

                
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
