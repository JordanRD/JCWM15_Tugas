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
class App extends React.Component{

  render() {
    return (
      <div>
      <Navigation />
                <Switch>
                 <Route path='/' component={Home} exact /> 
                    <Route path='/content1' component={Content1} />
                    <Route path='/content2' component={Content2} />
                    <Route path='/carousel' component={Carousel1} /> 
                    <Route path='/news' component={News} /> 
                    <Route path='/table' component={TableJSON} /> 
                    <Route path='*' component={NotFound}/>
                </Switch>
      </div>
    )
  }
}
export default App

