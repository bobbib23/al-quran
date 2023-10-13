import Navbarku from "../Components/Navbarku";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function MainLayout() {
  return (
    <>
      <Container>
        <Navbarku />
        <Outlet />
      </Container>
    </>
  );
}

export default MainLayout;
