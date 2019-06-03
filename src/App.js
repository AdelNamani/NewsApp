import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

import './news_style.css';

class App extends React.Component {
  render(){
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
