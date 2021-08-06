import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
// import { NavbarBrand, Navbar } from "reactstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Main from "./Components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
