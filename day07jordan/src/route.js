import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './page/home'
import Content1 from './page/content1'
import Content2 from './page/content2'
import Carousel1 from './page/carousel';
import history from './history'
export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                 <Route path='/' component={Home} exact /> 
                    <Route path='/content1' component={Content1} />
                    <Route path='/content2' component={Content2} />
                    <Route path='/carousel' component={Carousel1} /> 
                </Switch>
            </Router>
        )
    }
}