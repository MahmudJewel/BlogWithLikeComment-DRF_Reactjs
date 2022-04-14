import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "../assets/navigations.css";

const Navigation = () => {
  return (
    <div className="mb-3">
      <Navbar className="shadow nav-color">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Countries Portal
            </Link>{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/signup"
                className="nav-link text-dark"
              >
                SignUp
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/login"
                className="nav-link text-dark"
                activeClassName="active"
              >
                Login
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/logout"
                className="nav-link text-dark"
                activeClassName="active"
              >
                Logout
              </NavLink>{" "}
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/search"
                className="nav-link text-dark"
                activeClassName="active"
              >
                Search
              </NavLink>{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Navigation;
