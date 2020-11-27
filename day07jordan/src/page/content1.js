//% this is link page
import React from 'react'
import {
    Button
} from 'react-bootstrap'
import history from './../history'
class Content1 extends React.Component{
    render() {
        return (
            <div id='home'>
                <h1>
                    Ini Link Page
                </h1>
                <Button width='50'onClick={()=> history.push('/')}>
                Return to Home
                </Button>
                
                
            </div>
        )
    }
}
export default Content1