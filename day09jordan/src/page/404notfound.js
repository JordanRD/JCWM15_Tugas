import React from 'react'
import {connect} from 'react-redux'
class NotFound extends React.Component{
    render() {
        return (
            <h1>
                {this.props.username?'404 Not Found':'Please Login or Register'}
            </h1>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.user.username
    }
}
export default connect(mapStateToProps) (NotFound)