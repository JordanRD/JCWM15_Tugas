
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


let URL = 'http://newsapi.org/v2/top-headlines?country='
let KEY = '&apiKey=3d178d8a35d749f2ad0ca1697fc12f7a'
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            link: [`http://newsapi.org/v2/top-headlines?country=id${KEY}`],
            country: [
                ['Indonesia', 'id'],
                ['Philiphines', 'ph'],
                ['China', 'cn'],
                ['South Korea', 'kr'],
                ['Thailand', 'th'],
                ['Singapore', 'sg'],
                ['Australia', 'au'],
                ['Japan', 'jp'],
                ['Rusia', 'ru'],
                ['United States', 'us']
            ],
            news: [
                {
                    title: 'gawat merokok dapat menghasilkan polusi',
                    description: 'pak andi perokok ...'
                },
                {
                    title: 'partai kacang polong diprotes warga',
                    description: 'ibu siti memprotes karena...'
                },
                {
                    title: 'narkoba semakin berbahaya',
                    description: 'ayah dari seorang bocah memberi...'
                },
                {
                    title: 'jangan berikan rokok',
                    description: 'bocah memberi sapi...'
                },
                {
                    title: 'andono bergabung dengan komunitas',
                    description :'tapi ternyata...'
                },
                {
                    title: 'presiden thailand setuju dengan anaknya',
                    description :'setuju kalau anaknya...'
                }
            
            ],
            inputvalue: ''
        }
    }
    componentDidMount() {
        Axios.get(this.state.link[0])
            .then((res) => {
                this.setState({ news: res.data.articles })

            })
            .catch((err) => {
                console.log(err)
            })
    }
    showCard = () => {
        console.log(this.state.link)

        let filternews = this.state.news.filter((a) => {
            let regex = new RegExp(this.state.inputvalue,'gi')
            if(regex.test(a.title))return a.title
        })

        console.log(filternews);
        console.log('ini '+this.state.inputvalue);
        return filternews.map((item, index) => {
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
    Showcountry = () => {
        return this.state.country.map((item, index) => {
            return (
                <NavDropdown.Item onClick={() => this.ChangeCountry(index)} value={item[1]}>{item[0]}</NavDropdown.Item>
            )
        })
    }

    ChangeCountry(event) {
        let jumlah = URL + this.state.country[event][1] + KEY
        let temp = [jumlah]
        this.setState({ link: temp })

        Axios.get(this.state.link[0])
            .then((res) => {
                return this.setState({ news: res.data.articles })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    Input = (i) => {
        this.setState({ inputvalue: i.target.value })
        console.log(this.state.inputvalue);
    }

    render() {
        console.log(this.state.link);
        return (
            <div >
                <Navbar bg="light" expand="lg" style={styles.h1props}>
                    <Navbar.Brand href="#home">Menit.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Country" id="basic-nav-dropdown">
                                {this.Showcountry()}
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl onChange={i => this.Input(i)} value={this.state.inputvalue} type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap' }}>
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
        , marginBottom: '3%'
    }
}
export default News





