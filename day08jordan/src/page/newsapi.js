
import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Nav
} from 'react-bootstrap'



let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = '3d178d8a35d749f2ad0ca1697fc12f7a'
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country:[['Indonesia','id'],['Philiphines','ph'],['China','cn'],'kr','th','sg','au','jp','ru','us'],
            news: []
        }

    }
    componentDidMount() {
        Axios.get(URL + KEY)
            .then((res) => {
                console.log(res)
                this.setState({ news: res.data.articles })
            })
            .catch((err) => console.log(err))
    }
    showCard = () => {
        return this.state.news.map((item, index) => {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button target='_blank' href={item.url} variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    country = () => {
        return this.state.country.map((item, index) => {
            return (
                <NavDropdown.Item href="#action/3.4">Japan</NavDropdown.Item>
            )
        })
    }










    render() {
        console.log(this.state.news)
        return (
            <div >
                <Navbar bg="light" expand="lg" style={styles.h1props}>
                    <Navbar.Brand href="#home">Menit.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Country" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Indonesia</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Singapore</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Korea Selatan</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Philiphines</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">China</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Japan</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{margin:'auto', display: 'flex', flexWrap: 'wrap' }}>
                    {this.showCard()}
                </div>

            </div>
        )
    }
}
const styles = {
    h1props: {
        padding: '0 10%',
        justifyContent: 'space-evenly',
        display: 'flex'
        ,marginBottom:'3%'
    }
}
export default News