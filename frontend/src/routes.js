import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Pagenotfound from './components/pages/PageNotFound/Pagenotfound';

export default function Routes() {
  return (
    <Router>
      <Switch >
        <Route exact path="/notfound" component={Pagenotfound} />
        <Route>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Redirect to='/notfound'/>
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
