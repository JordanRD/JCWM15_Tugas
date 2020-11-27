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
import history from './../history'
import logo from './logo192.png'
import { Link } from 'react-router-dom'
class Navigation extends React.Component {
    render() {
        return (
            <div style={{minWidth:'100vw'}}>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href='#'  onClick={() => history.push('/')} >
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                    />
                    React-Exercise</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">
                                <Link onClick={() => history.push('/content1')} to='/content1' >Link Page</Link>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <Link  onClick={() => history.push('/carousel')} to='/carousel'>
                                Carousel
                            </Link>
                        </Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <Link  onClick={() => history.push('/content2')} to='/content2' >To-do list</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default Navigation