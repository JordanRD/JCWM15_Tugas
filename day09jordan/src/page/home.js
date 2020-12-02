import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (

            <div id='home'>
                <h1>
                    Ini Home Page
            </h1>
                <Button width='50'>
                <Link style={{color:'white',textDecoration:'none',width:'100%'}} to='/content1'>To Link</Link>
                </Button>
                
            </div>
        )
    }
}
export default Home

//style={{width:'100%}}