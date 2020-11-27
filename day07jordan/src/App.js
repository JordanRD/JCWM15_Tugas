import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import Home from './page/home'
import Navigation from './components/navigation'
import Content1 from './page/content1'
import Content2 from './page/content2'
import Carousel1 from './page/carousel';
import Routes from './route'
class App extends React.Component{

  render() {
    return (
      <div>
      <Navigation />
        <Routes/>
      </div>
    )
  }
}
export default App