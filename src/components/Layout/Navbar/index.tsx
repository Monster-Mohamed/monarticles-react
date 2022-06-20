import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import cl from "./index.module.scss";

const NavMenuDeskTop: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">
          MonArticles
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/add">
              Add new article
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const NavMenuDesk: React.FC = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NavMenuDeskTop />,
        document.getElementById("navbar")!
      )}
    </React.Fragment>
  );
};

export default NavMenuDesk;
