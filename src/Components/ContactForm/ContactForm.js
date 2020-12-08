import { Component } from 'react';
import { v4 as uuid } from 'uuid';

import styles from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleFormChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contactAdd } = this.props;

    const isFormValid = this.validationForm();
    if (!isFormValid) {
      return;
    }

    contactAdd({ id: uuid(), name, number });
    this.resetForm();
  };

  validationForm = () => {
    const { name, number } = this.state;
    const { checkUnique } = this.props;

    if (!name || !number) {
      alert('You have an empty field. Please add name and phone number.');
      return false;
    }
    return checkUnique(name);
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleFormChange}
        />
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          value={number}
          onChange={this.handleFormChange}
        />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
