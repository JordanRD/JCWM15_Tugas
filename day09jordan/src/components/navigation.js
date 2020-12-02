import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown,
} from 'react-bootstrap'
import logo from './logo192.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../action';
class Navigation extends React.Component {
    handleLogOut = () => {
        this.props.logout()
        localStorage.removeItem('username')
    }
    render() {
        return (
            <div style={{ minWidth: '100vw' }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >
                        <Link style={{ color: 'black', textDecoration: 'none' }} to='/'><img
                            src={logo}
                            width="30"
                            height="30"
                            alt="React Bootstrap logo"
                        />
                    React-Exercise</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to='/content1' >Link Page</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to='/carousel'>
                                    Carousel
                            </Link>
                            </Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item >
                                    <Link to='/content2' >To-do list</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/news'>News</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item >
                                    <Link to='/table'>
                                        Table
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/count'>Count</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.props.username?this.props.username:'Username'}
                    </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {this.props.username
                                    ?
                                    <Dropdown.Item onClick={this.handleLogOut} >Logout</Dropdown.Item>
                                    :
                                    <>
                                    <Dropdown.Item as={Link} to='/login'>Login</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='/register'>Register</Dropdown.Item>
                                    </>
                                }
                        </Dropdown.Menu>
                    </Dropdown>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}

export default connect(mapStateToProps, { logout }) (Navigation)