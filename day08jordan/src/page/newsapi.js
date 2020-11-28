
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
let CATEGORY ='&category='
let KEY = '&apiKey=3d178d8a35d749f2ad0ca1697fc12f7a'
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            link: [`http://newsapi.org/v2/top-headlines?country=id`],
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
            news: [],
            inputvalue: '',
            category: 
                [
                    'sports',
                    'entertainment',
                    'health',
                    'business',
                    'technology',
                    'science'],
            textcountry: '',
            fixcategory: '',
            textcategory:''
            
        }
    }
    componentDidMount() {
        
         this.getdata()

    }
    getdata = () => {
        Axios.get(this.state.link[0]+this.state.fixcategory+KEY)
        .then((res) => {
            this.setState({ news: res.data.articles })
            console.log(this.state.link[0]+this.state.fixcategory+KEY)

        })
        .catch((err) => {
            console.log(err)
        })

    }
    showCard = () => {

        // console.log(this.state.link)

        let filternews = this.state.news.filter((a) => {
            let regex = new RegExp(this.state.inputvalue,'gi')
            if(regex.test(a.title)||regex.test(a.description))return a.title
        })

        // console.log(filternews);
        // console.log('ini '+this.state.inputvalue);
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
        this.setState({textcountry:this.state.country[event][0]})
        let country=this.state.country[event][1]
        let jumlah = URL + country
        let temp = [jumlah]
        this.setState({ link: temp })
        setTimeout(() => {
            this.getdata()
        }, 100);

    }

    Input = (i) => {
        this.setState({ inputvalue: i.target.value })
        console.log(this.state.inputvalue);
    }
    Showcategory = () => {
        return this.state.category.map((item, index) => {
            return (
                <NavDropdown.Item onClick={() => this.ChangeCategory(index)} value={item}>{item}</NavDropdown.Item>
            )
        })
    }
    ChangeCategory = (event) => {
        this.setState({textcategory:this.state.category[event]})
        let temp = CATEGORY+this.state.category[event]
        this.setState({ fixcategory: temp })
        setTimeout(() => {
            this.getdata()
        }, 100);
    }
    render() {
        console.log(this.state.link[0]+this.state.fixcategory+KEY);
        return (
            <div >
                <Navbar bg="light" expand="lg" style={styles.h1props}>
                    <Navbar.Brand href="#home">Menit.com</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title={this.state.textcountry==''?'Indonesia':this.state.textcountry} id="basic-nav-dropdown">
                                {this.Showcountry()}
                            </NavDropdown>
                        </Nav>
                        <Nav className="mr-auto">
                            <NavDropdown title={this.state.textcategory==''?'Select category':this.state.textcategory} id="basic-nav-dropdown">
                                {this.Showcategory()}
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




                // {
                //     title: 'gawat merokok dapat menghasilkan polusi',
                //     description: 'pak andi perokok ...'
                // },
                // {
                //     title: 'partai kacang polong diprotes warga',
                //     description: 'ibu siti memprotes karena...'
                // },
                // {
                //     title: 'narkoba semakin berbahaya',
                //     description: 'ayah dari seorang bocah memberi...'
                // },
                // {
                //     title: 'jangan berikan rokok',
                //     description: 'bocah memberi sapi...'
                // },
                // {
                //     title: 'andono bergabung dengan komunitas',
                //     description :'tapi ternyata...'
                // },
                // {
                //     title: 'presiden thailand setuju dengan anaknya',
                //     description :'setuju kalau anaknya...'
                // }
