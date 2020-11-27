import React from 'react'
import { Button } from 'react-bootstrap'
import history from './../history'
class Home extends React.Component {
    render() {
        return (

            <div id='home'>
                <h1>
                    Ini Home Page
            </h1>
                <Button width='50'  onClick={()=> history.push('/content1')}>
                Link
                </Button>
                
            </div>
        )
    }
}
export default Home