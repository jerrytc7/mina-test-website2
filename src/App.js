import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import BSNavbar from "./components/Navbar";
import Home from "./components/Home";
import Math from "./components/subjects/Math";
import LanguageArts from "./components/subjects/LanguageArts";
import Science from "./components/subjects/Science";
import SocialStudies from "./components/subjects/SocialStudies";
import Fitness from "./components/subjects/Fitness";
import Art from "./components/subjects/Art";
import Technology from "./components/subjects/Technology";
import ContactForm from "./components/contact/ContactForm";
import AfterSchool from "./components/programs/AfterSchool";
import SummerCamps from "./components/programs/SummerCamps";
import SchoolSchedule from "./components/information/SchoolSchedule";
import Brochure from "./components/information/Brochure";
import Policies from "./components/information/Policies";
import Staff from "./components/about-us/Staff";
import Philosophies from "./components/about-us/Philosophies";
import { useLayoutEffect, useState } from "react";
import { Container } from "react-bootstrap";

function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {

  const [toasts, setToasts] = useState([])

  function addToast(toast) {
    setToasts([...toasts, toast])
  }

  function removeToast(id) {
    setToasts(toasts.filter((toast)=>toast.id !== id))
  }

  return (
    <BrowserRouter>
      <Wrapper>
        <BSNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/math" element={<Math />} />
            <Route path="/language-arts" element={<LanguageArts />} />
            <Route path="/science" element={<Science />} />
            <Route path="/social-studies" element={<SocialStudies />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/art" element={<Art />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/contact-form" element={<ContactForm addToast={addToast}/>} removeToast={removeToast} />
            <Route path="/after-school" element={<AfterSchool />} />
            <Route path="/summer-camps" element={<SummerCamps />} />
            <Route path="/school-schedule" element={<SchoolSchedule />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/philosophies" element={<Philosophies />} />
          </Routes>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
