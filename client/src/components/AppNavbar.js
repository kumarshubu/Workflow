import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "./Modal";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

export default class AppNavbar extends React.Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar
          style={{ backgroundColor: "#1976D2" }}
          expand="sm"
          className="mb-5"
        >
          <Container>
            <NavbarBrand style={{ color: "#fff" }}>Admin Panel</NavbarBrand>
            <NavbarToggler
              onClick={this.toggle}
              style={{ background: "red" }}
            />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" Navbar>
                <Modal />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
