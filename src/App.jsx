import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LabTest from "./pages/booking/LabTest";
import LabForm from "./pages/booking/LabForm";
import Services from "./pages/services/Services";
import BlocOperate from "./pages/services/BlocOperate";
import CentreFiv from "./pages/services/CentreFiv";
import Ugencies from "./pages/services/Ugencies";
import Imagrie from "./pages/services/Imagrie";
import Hospitalization from "./pages/services/Hospitalization";
import Laboratoire from "./pages/services/Laboratoire";
import Stimulation from "./pages/services/Stimulation";
import Insemination from "./pages/services/Insemination";
import DonDeSparm from "./pages/services/DonDeSparm";
import DonDovocytes from "./pages/services/DonDovocytes";
import Embryons from "./pages/services/Embryons";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking/lab-test" element={<LabTest />} />
            <Route path="/booking/lab-form" element={<LabForm />} />
            <Route path="/services/bloc-operate" element={<BlocOperate />} />
            <Route path="/services/centre-fiv" element={<CentreFiv />} />
            <Route path="/services/ugencies" element={<Ugencies />} />
            <Route path="/services/imagrie" element={<Imagrie />} />
            <Route
              path="/services/hospitalization"
              element={<Hospitalization />}
            />
            <Route path="/services/laboratoire" element={<Laboratoire />} />
            <Route path="/services/stimulation" element={<Stimulation />} />
            <Route path="/services/insemination" element={<Insemination />} />
            <Route path="/services/don-de-sparm" element={<DonDeSparm />} />
            <Route
              path="/services/don-do-ovocytes"
              element={<DonDovocytes />}
            />
            <Route path="/services/embryons" element={<Embryons />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
