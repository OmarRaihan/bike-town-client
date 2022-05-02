import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="header">
      <Navbar className="" expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold fs-4" as={Link} to="/home">
            Bike Town
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/bikes">
                  Bikes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/kits">
                  Riding Kits
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/spares">
                  Spares-Parts
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user ? (
                <button style={{ backgroundColor: "orangeRed" }} onClick={handleSignOut} className="signOut-btn btn rounded-pill text-white">
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
