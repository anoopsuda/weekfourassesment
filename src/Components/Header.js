import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron,  NavItem } from "reactstrap";
import {NavLink} from "react-router-dom"

 

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar dark >
            <div className="container">
          <NavbarBrand><i className="fa fa-star"  ></i> </NavbarBrand>

          <div className="nav  me-auto">
            <NavItem>
              <NavLink className='nav-link' to="/"><i className="fa fa-home"  /> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/About"><i className="fa fa-info"  ></i> About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/Menu"><i className="fa fa-list" ></i> Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to="/Contact"><i class="fa fa-address-card"  ></i> Contact Us</NavLink>
            </NavItem>
          </div>
          </div>
        </Navbar>
        {/* <Navbar dark>
        <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar> */}
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
