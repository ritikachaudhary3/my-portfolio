import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Home from "./assets/components/Home";
import Project from "./assets/components/Project";
function App() {
  return (
    <>
      {/* <Router>
      <div className="scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router> */}
      <Home />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
