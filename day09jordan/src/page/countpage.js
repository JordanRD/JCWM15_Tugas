import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../action'
import {Button} from 'react-bootstrap'
export class Countpage extends Component {
    handleButton = (a) => {
        if (a === 1) {
            this.props.increment()
            return null
        }
        this.props.decrement()
}


    render() {
        return (
            <div>
                <div style={{justifyContent:'space-between',flexDirection:'column',width:'300px',height:'300px',margin:'30px auto',display:'flex',backgroundColor:'cyan'}}>
                    <h1 style={{fontSize:'200px'}}>{this.props.result}</h1>
                    <div style={{display:'flex',justifyContent:'space-around',marginBottom:'20px'}}>
                    <Button onClick={()=>this.handleButton(1)} style={{flexBasis:'40%'}}>+</Button>
                    <Button onClick={()=>this.handleButton(2) } style={{flexBasis:'40%'}}>-</Button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        result:state.count.count
    }
}
export default connect(mapStateToProps,{decrement,increment}) (Countpage)
