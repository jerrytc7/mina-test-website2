import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BSNavbar from "./components/Navbar";
import Home from "./components/Home"
import Math from "./components/subjects/Math"
import Science from "./components/subjects/Science"
import SocialStudies from "./components/subjects/SocialStudies"
import Fitness from "./components/subjects/Fitness"
import Art from "./components/subjects/Art"
import Technology from "./components/subjects/Technology"
import ContactForm from "./components/contact/ContactForm";
import AfterSchool from "./components/programs/AfterSchool";
import SummerCamps from "./components/programs/SummerCamps";
import SchoolSchedule from "./components/information/SchoolSchedule";
import Brochure from "./components/information/Brochure";
import Policies from "./components/information/Policies";
import Staff from "./components/about-us/Staff";
import Philosophies from "./components/about-us/Philosophies";


function App() {
  return (
    <BrowserRouter>
      <div>
        <BSNavbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/math" element={<Math />}/>
            <Route path="/science" element={<Science />}/>
            <Route path="/social-studies" element={<SocialStudies />}/>
            <Route path="/fitness" element={<Fitness />}/>
            <Route path="/art" element={<Art />}/>
            <Route path="/technology" element={<Technology />}/>
            <Route path="/contact-form" element={<ContactForm />}/>
            <Route path="/after-school" element={<AfterSchool />}/>
            <Route path="/summer-camps" element={<SummerCamps />}/>
            <Route path="/school-schedule" element={<SchoolSchedule />}/>
            <Route path="/brochure" element={<Brochure />}/>
            <Route path="/policies" element={<Policies />}/>
            <Route path="/staff" element={<Staff />}/>
            <Route path="/philosophies" element={<Philosophies />}/>

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
