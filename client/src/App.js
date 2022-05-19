import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactForm from "./components/contact/ContactForm";
import AfterSchool from "./components/programs/AfterSchool";
import SummerCamps from "./components/programs/SummerCamps";
import SchoolSchedule from "./components/information/SchoolSchedule";
import Policies from "./components/information/Policies";
import Staff from "./components/about-us/Staff";
import Philosophies from "./components/about-us/Philosophies";
import { useLayoutEffect, useState } from "react";
import { Container, ToastContainer } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import Toast from "./components/Toast";
import subjects from "./data/subjects.json"
import Subject from "./components/subjects/Subject";
import Documents from "./components/information/Documents";
import documentData from "./data/documents.json";
import staffData from "./data/staff.json";


function Wrapper({ children }) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const [toasts, setToasts] = useState([]);

  function addToast(toast) {
    setToasts([...toasts, { ...toast, id: uuid() }]);
  }

  function removeToast(id) {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }

  return (
    <HashRouter>
      <Wrapper>
        <Navbar subjects={subjects}/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            {subjects.map(({path,...subject})=> <Route path={path} element={<Subject {...subject} />} />)}
            <Route
              path="/contact-form"
              element={<ContactForm addToast={addToast} />}
            />
            <Route path="/after-school" element={<AfterSchool />} />
            <Route path="/summer-camps" element={<SummerCamps />} />
            <Route path="/school-schedule" element={<SchoolSchedule />} />
            <Route path="/documents" element={<Documents documents={documentData}/>} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/staff" element={<Staff staffData={staffData}/>} />
            <Route path="/philosophies" element={<Philosophies />} />
          </Routes>
          <div className="position-relative">
            <ToastContainer position="bottom-center">
              {toasts.map((toast) => {
                return (
                  <Toast {...toast} onClose={() => removeToast(toast.id)} />
                );
              })}
            </ToastContainer>
          </div>
        </Container>
      </Wrapper>
    </HashRouter>
  );
}

export default App;
