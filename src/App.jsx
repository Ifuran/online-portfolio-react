import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <>
      <NavbarComponent />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
