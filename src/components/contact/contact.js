import React, { Component } from "react";
import "./contact.css";

class About extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />

        <br />
        <div class="container-out">
          <div class="container-in">
            <div class="contact-form">
              <p>Name</p>
              <input type="text" id="contact-name" />
              <p>Email</p>
              <input type="email" id="contact-email" />
              <p>Message</p>
              <textarea id="contact-message"></textarea>
              <button id="send">Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
