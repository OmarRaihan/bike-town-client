import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import "./Header.css";

const Header = () => {
  const [user, loading] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header style={{position: 'sticky', top: '0', zIndex: "50"}} className="header shadow-lg">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand style={{color: '#485461'}} className="head-name fw-bold fs-4" as={Link} to="/home">
            BIKE TOWN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>

              {user ? (
                <NavDropdown title="Manage" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/manage">
                    Manage Items
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addItem">
                    Add New Item
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/myItem">
                    My Items
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ""
              )}

              <NavDropdown title="Products" id="basic-nav-dropdown">
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
                <button style={{ backgroundColor: "orangeRed" }} onClick={handleSignOut} className="signOut-btn btn text-white">
                  LogOut
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
