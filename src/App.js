import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imported pages
import Home from "./pages/home/Home.jsx";
import Culture from "./pages/culture/Culture.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Packages from "./pages/packages/Packages.jsx";
import Services from "./pages/services/Services.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";
import About from "./pages/about/About.jsx";
import CaseStudies from "./pages/caseStudies/CaseStudies.jsx";
import Standart from "./pages/packages/products/standart/Standart.jsx";
import Premium from "./pages/packages/products/premium/Premium.jsx";
import Elite from "./pages/packages/products/elite/Elite.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/caseStudies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/products/standart" element={<Standart />} />
        <Route path="/products/premium" element={<Premium />} />
        <Route path="/products/elite" element={<Elite />} />
      </Routes>
    </Router>
  );
}

export default App;