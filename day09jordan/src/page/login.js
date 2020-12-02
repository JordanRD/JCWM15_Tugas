import React, { Component } from 'react'
import { Form ,Button} from 'react-bootstrap'
import Axios from 'axios'
import {Redirect} from 'react-router-dom'
//action untuk memasukan data
import { login } from '../action'
//untuk menyambungkan
import {connect} from 'react-redux'
 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            rememberme:true
        }
    }

    handleLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value
        console.log(username, password);

        if(!username||!password)return alert('input all form')

        Axios.get(`http://localhost:2000/login?username=${username}&pass=${password}`)
            .then((res) => {
                // console.log(res.data[0]);
                if (res.data.length === 0) return alert('invalid username or password')
                this.props.login(res.data[0])
                // localStorage.setItem('username',username)
                if(this.state.rememberme){localStorage.username = username}
            })
            .catch((err) => { console.log(err) })
     }
     handleChecked = (e) => {
        this.setState({rememberme:e.target.checked})
    }
     render() {
        if(this.props.username)return <Redirect to='/' />
        return (
            <div style={{ margin: '80px auto', width: '300px', height: '300px' }}>
                <h2 style={{textAlign:'start'}}>Login</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label> <br/>
                        <input ref='username' type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label> <br/>
                        <input  type="text" ref='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox2">
                        <Form.Check name='rememberme' checked={this.state.rememberme} onChange={this.handleChecked} type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleLogin}>
                        Login
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

export default connect(mapStateToProps,{login}) (Login)