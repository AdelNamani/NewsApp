import React from 'react';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom'

import Home from './Home'
import ArticleView from './ArticleView'
import CategoryView from './CategoryView'
import Navbar from './Navbar'
import Footer from './Footer'

class App extends React.Component {
  render(){
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route 
            exact 
            path='/' 
            component={Home}
          />
          <Route
            path='/article/:title'
            component = {ArticleView} />}
          />
          <Route 
            path='/category/:category_name'
            component = {CategoryView}
          />
        </Switch>
        <Footer/>
      </Router>
    )
  }
}

export default App;
