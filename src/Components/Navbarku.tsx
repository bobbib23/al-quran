import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarku = () => {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" sticky="top">
        <Container>
          <Link to="/" className="btn fw-bold">
            DoaIslam.my.id
          </Link>
          <Nav className="ms-auto">
            <Link to="/about" className="btn btn-outline-light">
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarku;
