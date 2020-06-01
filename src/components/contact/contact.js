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

        
                <h3>Contact me</h3>
        <div class="container-in">
          <Container>
            <Row>
              <div class="contact-form">
                <Col sm={6}>
                  
                  <h3>Message me here!</h3>
                  <br />

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
                  <div className="desktop-only"></div>
                </div>

                <Col sm={6}>
                    <h3>My Info</h3>
                  <div class="contact-form">
                 <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia nemo sit illum magni hic vel unde facere? Eius
                    quidem cum atque rem dolorum architecto, itaque debitis
                    facilis id temporibus. Non.
                  </p> 

                  <br/>
                    <p>
                      <i class="fas fa-map-marker-alt"></i>&nbsp; New York City Metropolitan Area 
       
                    </p>
                    <p>
                      <i class="fas fa-phone-alt"></i>&nbsp; 301 461 1846
                    </p>
                    <p>
                      <i class="fas fa-envelope"></i>&nbsp; kimiadarden@gmail.com
                    </p>
                  </div>
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


                </Col>

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
