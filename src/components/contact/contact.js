import React from "react";

import firebase from "../../Firestore";

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
      <form onSubmit={this.addUser}>
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={this.updateInput}
          value={this.state.fullname}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={this.updateInput}
          value={this.state.email}
        />

        <input
          type="text"
          name="message"
          placeholder="Message"
          onChange={this.updateInput}
          value={this.state.message}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default User;
