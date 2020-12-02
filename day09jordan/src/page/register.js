import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
//action untuk memasukan data
import { login } from '../action'
//untuk menyambungkan
import { connect } from 'react-redux'
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirectkah: false,
            checkedbox: false,
            rememberme: true,
            valueval: 0
        }
    }

    registering = () => {
        if (this.state.checkedbox) console.log('checked')
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value
        if (!username || !email || !password) return alert('input is empty')
        Axios.get('http://localhost:2000/login')
            .then((res) => {
                res.data.map((item) => {
                    if (item.username === username || item.email === email) {
                        this.setState({ valueval: 2 })
                    }
                })
                if (this.state.valueval === 0) {

                    Axios.post('http://localhost:2000/login', {
                        username: username,
                        pass: password,
                        email: email
                    })
                        .then((res) => {

                            if (this.state.checkedbox) {
                                this.props.login({ username: username, email: email, pass: password })

                                this.setState({ redirectkah: true })
                                if (this.state.rememberme) { localStorage.username = username }
                            } else {
                                this.setState({ redirectkah: true })
                            }
                        })
                } else {
                    this.setState({ valueval: 0 })
                    return alert('username or email was taken')
                }
            })

    }
    handleChecked = (e) => {
        if (e.target.name === 'checkedbox') return this.setState({ checkedbox: e.target.checked })
        return this.setState({ rememberme: e.target.checked })
    }

    render() {

        if (this.props.username && this.state.redirectkah) return <Redirect to='/' />
        if (this.state.redirectkah) return <Redirect to='/login' />

        return (
            <div style={{ margin: '80px auto', width: '300px', height: '300px' }}>
                <Form>
                    <h2>Register</h2>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control ref='username' type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref='email' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref='password' type="text" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check name='checkedbox' checked={this.state.checkedbox} onChange={this.handleChecked} type="checkbox" label="Log me in" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox2">
                        <Form.Check name='rememberme' checked={this.state.rememberme} onChange={this.handleChecked} type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button onClick={this.registering} variant="primary" >
                        Register
                    </Button>
                </Form>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, { login })(Register)