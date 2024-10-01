import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

function MainLayout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}

export default MainLayout;
