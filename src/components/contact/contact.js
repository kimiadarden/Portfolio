import React from "react";
import firebase from "../../Firestore";
import "./contact.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.scss";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullname: "",
      message: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (e) => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email,
      message: this.state.message,
    });

    this.setState({
      fullname: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <div class="container-in">
          <Container>
            <Row>

              <div class="contact-form">
                <h3>Contact me</h3>
                <Col sm={6}>
                  <form onSubmit={this.addUser}>
                    <p>Name</p>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Full name"
                      onChange={this.updateInput}
                      value={this.state.fullname}
                    />

                    <p>Email</p>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={this.updateInput}
                      value={this.state.email}
                    />

                    <p>Message</p>

                    <input
                      id="contact-message"
                      type="textarea"
                      name="message"
                      placeholder="Message"
                      onChange={this.updateInput}
                      value={this.state.message}
                    />
                    <br />
                    <br />

                    <button type="submit">Submit</button>
                  </form>
                </Col>


                <div className="example">
                  <hr className="mobile-only" />
                  <div className="desktop-only"
                  
                  
                  ></div>
                </div>

                <Col sm={6}>right</Col>

                <br />
                <br />
                <br />
              </div>

              {/* </div> */}
            </Row>
          </Container>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default User;
