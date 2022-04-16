import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Fragment } from "react";
import { connect } from "react-redux";

import "../assets/navigations.css";
import { logout } from "../actions/root";

const Navigation = ({logout, isAuthenticated}) => {
  const guestLinks = () =>(
    <Fragment>
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
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <Nav.Link>
              <NavLink
                activeClassName="active"
                to="/createblog"
                className="nav-link text-dark"
                activeClassName="active"
              >
                Blog
              </NavLink>
        </Nav.Link>

      <Nav.Link>
              <a
                activeClassName="active"
                to="/logout"
                className="nav-link text-dark"
                activeClassName="active"
                onClick={logout}
              >
                Logout
              </a>{" "}
            </Nav.Link>
    </Fragment>
  );

  return (
    <div className="mb-3">
      <Navbar className="shadow nav-color">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand">
              Blog Portal
            </Link>{" "}
          </Navbar.Brand>

          <Nav className="">

          {isAuthenticated ? authLinks() : guestLinks()}

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
// export default Navigation;
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navigation);
