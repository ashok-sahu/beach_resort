import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './containers/Home/Home'
import Rooms from './containers/Rooms/Rooms'
import SingleRoom from './containers/SingleRoom/SingleRoom'
import Error from './containers/Error/Error'
import NavBar from './components/Navbar/Navbar'
import './App.css'

export default function App() {
  return (
  <>
  <NavBar/>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route exact path='/rooms/' component={Rooms}/>
  <Route exact path='/rooms/:slug' component={SingleRoom}/>
  <Route component={Error}/>
  </Switch>
  </>
  )
}
