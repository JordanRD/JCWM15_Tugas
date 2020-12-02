import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './page/home'
import Navigation from './components/navigation'
import Content1 from './page/content1'
import Content2 from './page/content2'
import Carousel1 from './page/carousel';
import NotFound from './page/404notfound'
import News from './page/newsapi'
import TableJSON from './page/tablejson';
import Login from './page/login';
import Axios from 'axios';
import { login } from './action'
import { connect } from 'react-redux';
import Register from './page/register'
import Countpage from './page/countpage'
class App extends React.Component{

  componentDidMount() {
    Axios.get(`http://localhost:2000/login?username=${localStorage.username}`)
      .then((res) => { this.props.login(res.data[0]) })
      .catch((err)=>console.log(err))
}

  moreroutes = () => {
    if (this.props.username) return (
      <>
        <Route path='/carousel' component={Carousel1} /> 
                <Route path='/content2' component={Content2} />
                <Route path='/news' component={News} /> 
                <Route path='/table' component={TableJSON} /> 
                <Route path='/count' component={Countpage} /> 
                
        </>

  )
}
  
  render() {
    return (
      <div>
      <Navigation />
                <Switch>
                 <Route path='/login' component={Login} exact /> 
                 <Route path='/register' component={Register} exact /> 
                <Route path='/' component={Home} exact /> 
                <Route path='/content1' component={Content1} />
                {this.moreroutes()}
                <Route path='*' component={NotFound}/>
                </Switch>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      username: state.user.username
  }
}
export default connect(mapStateToProps,{login}) (App)

