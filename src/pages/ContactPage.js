import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {
  state = {
    value: '',
    isEmpty: true,
  };

  handleChange = (e) => {
    const value = e.target.value;
    const isEmpty = e.target.value ? false : true;
    this.setState(() => ({ value, isEmpty }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(() => ({ value: '', isEmpty: true }));
  };

  render() {
    return (
      <div className='contact'>
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Wpisz wiadomość'></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={!this.state.isEmpty}
          message='Masz niewypełniony formularz. Czy na pewno chcesz opóścić tę stronę?'
        />
      </div>
    );
  }
}

export default ContactPage;
