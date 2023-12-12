import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

import { Link } from "react-router-dom";

export const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda Mirco Arnold</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Link to="/#">Home</Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to={"/category/laptops"}>Laptops</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to={"/category/smartphones"}>Smartphones</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
