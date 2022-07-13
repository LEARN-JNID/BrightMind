import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)

    return (
      <>
        <h3>Header</h3>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Bright Mind</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/">
                  Home
                </NavLink>
              </NavItem>
               <NavLink to="/">
                  About Us
               </NavLink>
              { logged_in &&
              <NavItem>
                <NavLink to="/postindex">
                  My Journal
                </NavLink>
              </NavItem>
              }
              { logged_in &&
              <NavItem>
                <NavLink to="/postnew">
                  Add New Entry
                </NavLink>
              </NavItem>
              }
              { logged_in &&
              <NavItem>
                <a href={sign_out_route}>Sign Out</a>
              </NavItem>
              }
              { !logged_in&&
              <NavItem>
                <a href={sign_in_route}>Sign In</a>
              </NavItem>
              }
              { !logged_in&&
              <NavItem>
                <a href={new_user_route}>Sign Up</a>
              </NavItem>
              }     
            </Nav>
          </Collapse>
        </Navbar>
      </>
    )
  }
}
