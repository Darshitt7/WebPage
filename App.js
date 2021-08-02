import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Componet/Home';
import About from './Componet/About';
import Services from './Componet/Services';
import Contact from './Componet/Contact';




const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to="/" />
      </Switch>
     
    </>
  )
}

export default App
