import React, { Component } from 'react';

class FormContact extends Component {
    state = {
        name: '',
        number: ''
    }

    hendleChangeInput = e => {
        const { name, number } = e.currentTarget;
        this.setState({ [name]: number });
        // console.log(this.state);
        // this.setState({ number: e.currentTarget.number });
        // console.log(e.target.elements.name.value);
        // console.log(e.target.elements.number.value);
    };

    handleSubmitForm = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // required
                        onChange={this.hendleChangeInput}
                    />
                </label>
                    <br />
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        // required
                        onChange={this.hendleChangeInput}
                    />
                </label>
                    <br />
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default FormContact;