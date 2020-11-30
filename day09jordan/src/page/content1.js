//% this is link page
import React from 'react'
import {
    Button
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
// 
class Content1 extends React.Component{
    render() {
        return (
            <div id='home'>
                <h1>
                    Ini Link Page
                </h1>
                <Button width='50'>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>Return to Home</Link>
                </Button>
                
                
            </div>
        )
    }
}
export default Content1