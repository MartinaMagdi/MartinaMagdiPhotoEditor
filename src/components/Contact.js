import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import '../css/contact.css'

const initialState = {
    recipient: 'martinamagdi6@gmail.com',
    name: '',
    email: '',
    message: '',
    nameError: '',
    emailError: '',
    messageError: '',
}

export default class Contact extends Component {
    state = initialState

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    validate = () => {
        let nameError = ''
        let emailError = ''
        let messageError = ''

        if (!this.state.name) {
            nameError = "Please enter your name"
        }

        if (!this.state.message) {
            messageError = "Please enter your message"
        }

        if (!this.state.email) {
            emailError = "Please enter your email"
        }

        else if (!this.state.email.includes('@')) {
            emailError = "invalid email!";
        }

        if (emailError || nameError || messageError) {
            this.setState({ emailError, nameError, messageError })
            return false
        }
        return true
    }

    render() {
        return (
            <div className="contact container">
                <Card>
                    <CardHeader
                        className="center"
                        title="Contact me"
                    />
                    <CardContent>
                        <form action="https://formspree.io/martinamagdi6@gmail.com" method="POST">
                            <TextField
                                className="text-field"
                                autoFocus={true}
                                required={true}
                                id="name"
                                name="name"
                                label="Name"
                                margin="normal"
                                onChange={this.handleChange}
                            />
                            {this.state.nameError ? (
                                <div className="error-msg">{this.state.nameError}</div>
                            ) : null}
                            <br />
                            <TextField
                                className="text-field"
                                required={true}
                                type="email"
                                id="email"
                                name="_replyto"
                                label="Email"
                                margin="normal"
                                onChange={this.handleChange}
                            />
                            {this.state.emailError ? (
                                <div className="error-msg">{this.state.emailError}</div>
                            ) : null}
                            <br />
                            <TextField
                                className="text-field"
                                required={true}
                                id="message"
                                label="Message"
                                name="message"
                                multiline
                                rowsMax="15"
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            {this.state.messageError ? (
                                <div className="error-msg">{this.state.messageError}</div>
                            ) : null}
                            <IconButton type="submit" className="footer-btn send-btn" aria-label="Add to favorites">
                                Send
                        </IconButton>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
