import React, { Component } from 'react'
import Header from "./Header"
import Footer from "./Footer";
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';

import {Switch, Route, Redirect} from "react-router-dom"

export class Main extends Component {

    // render() {


    //     const HomePage = () => {
    //       return(
    //           <Home />
    //       );
    //     }

    render() {
        return (
            <div>
               
                   <Header />
      <section className="container">
  
     <Switch>
              <Route path='/home' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Menu' component={Menu} />
              <Route path='/Contact' component={Contact} />
              {/* <Route exact path='/About' component={() => <Menu dishes={this.state.dishes} />} /> */}
              <Redirect to="/home" />
          </Switch>
      </section>
   <Footer />
            </div>
        )
    }
}

export default Main
