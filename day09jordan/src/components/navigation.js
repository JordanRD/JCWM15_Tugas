import React from 'react'
import {
    Navbar,
    Nav,
    NavDropdown,
    Dropdown,
    Button,
    Form,
    FormControl
} from 'react-bootstrap'
import logo from './logo192.png'
import { Link } from 'react-router-dom'
class Navigation extends React.Component {
    render() {
        return (
            <div style={{ minWidth: '100vw' }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href='#' >
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
                            <Nav.Link href="#">
                                <Link to='/content1' >Link Page</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to='/carousel'>
                                    Carousel
                            </Link>
                            </Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <Link to='/content2' >To-do list</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Link to='/news'>News</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link to='/table'>
                                        Table
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Navigation