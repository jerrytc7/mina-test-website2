import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BSNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <BSNavbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
