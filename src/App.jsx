import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from "./pages/services/Services";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Appointment";


const App = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Booking />} />
        </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
