import React, { Component } from "react";
import axios from "axios";
import styles from "./index.css";
import config from "../../../config.json";

const URL =
  (config && config.infosessieFormUrl) ||
  "Add infosessieFormUrl in config.json";

class InfosessieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      done: false,
      error: null
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };

  onSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const { firstName, lastName, email } = this.state;

    if (firstName === "" || lastName === "" || email === "") {
      this.setState({ error: "Vul alle gegevens in" });
    } else {
      axios
        .post(URL, { firstName, lastName, email, date: this.props.date })
        .then(() => {
          this.setState({
            done: true,
            firstName: null,
            lastName: null,
            email: null
          });
        })
        .catch(err => this.setState({ error: err }));
    }
  };

  render() {
    const { firstName, lastName, email, done, error } = this.state;
    const form = (
      <form
        id="info-sessie-form"
        name="info-sessie-form"
        className={styles.form}
        onSubmit={this.onSubmit}
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="firstName"
            placeholder="voornaam"
            required
            value={firstName}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="naam"
            value={lastName}
            onChange={this.onChange}
            required
          />
          <input
            type="submit"
            value="Schrijf je in"
            name="subscribe"
            className={styles.button}
          />
        </div>
      </form>
    );

    if (error) {
      return (
        <div>
          <div>Error: {JSON.stringify(error)} </div>
          {form}
        </div>
      );
    }

    return done ? (
      <div>Dank je voor je inschrijving, kijk in je mailbox voor meer info</div>
    ) : (
      form
    );
  }
}

InfosessieForm.propTypes = {
  date: React.PropTypes.string
};

export default InfosessieForm;
