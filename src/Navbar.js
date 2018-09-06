import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar inverse="inverse" collapseOnSelect="collapseOnSelect">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">BG Photography</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight="pullRight">
              <NavItem eventKey={1} href="#">
                Bio
              </NavItem>
              <NavItem eventKey={2} href="#">
                Contact Me
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbars;
