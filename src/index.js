import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Hobby from "./pages/Hobby";
import Extra from "./pages/Extra";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <div className="All">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Course" element={<Course />} />
          <Route path="Hobby" element={<Hobby />} />
          <Route path="Extra" element={<Extra />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
