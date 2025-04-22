// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Components
// import Cart from "./components/cart/Cart";

// // Pages
// import Home from "./pages/home/Home";
// import Culture from "./pages/culture/Culture";
// import Contact from "./pages/contact/Contact";
// import Packages from "./pages/packages/Packages";
// import Services from "./pages/services/Services";
// import ErrorPage from "./pages/error/ErrorPage";
// import About from "./pages/about/About";
// import CaseStudies from "./pages/caseStudies/CaseStudies";
// import Standart from "./pages/packages/products/standart/Standart";
// import Premium from "./pages/packages/products/premium/Premium";
// import Elite from "./pages/packages/products/elite/Elite";

// function App() {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const openCart = () => setIsCartOpen(true);
//   const closeCart = () => setIsCartOpen(false);
//   const [selectedPackage, setSelectedPackage] = useState(null);

//   const addToCart = (pkg) => {
//     setSelectedPackage(pkg);
//     setIsCartOpen(true); // this opens the drawer when a package is added
//   };

//   const removeFromCart = () => {
//     setSelectedPackage(null);
//   };


//   return (
//     <Router>
//       <Cart
//         isCartOpen={isCartOpen}
//         closeCart={closeCart}
//         selectedPackage={selectedPackage}
//         removeFromCart={removeFromCart}
//       />
//       <Routes>
//         <Route path="/" element={<Home openCart={openCart} />} />
//         <Route path="/culture" element={<Culture openCart={openCart} />} />
//         <Route path="/contact" element={<Contact openCart={openCart} />} />
//         <Route path="/packages" element={<Packages openCart={openCart} addToCart={addToCart} />} />
//         <Route path="/services" element={<Services openCart={openCart} />} />
//         <Route path="/caseStudies" element={<CaseStudies openCart={openCart} />} />
//         <Route path="/about" element={<About openCart={openCart} />} />
//         <Route path="/products/standart" element={<Standart addToCart={addToCart} />} />
//         <Route path="/products/premium" element={<Premium addToCart={addToCart} />} />
//         <Route path="/products/elite" element={<Elite addToCart={addToCart} />} />

//         <Route path="*" element={<ErrorPage openCart={openCart} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Cart from "./components/cart/Cart.jsx";

// Pages
import Home from "./pages/home/Home";
import Culture from "./pages/culture/Culture";
import Contact from "./pages/contact/Contact";
import Packages from "./pages/packages/Packages";
import Services from "./pages/services/Services";
import ErrorPage from "./pages/error/ErrorPage";
import About from "./pages/about/About";
import CaseStudies from "./pages/caseStudies/CaseStudies";
import Standart from "./pages/packages/products/standart/Standart";
import Premium from "./pages/packages/products/premium/Premium";
import Elite from "./pages/packages/products/elite/Elite";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <Router>
      <Cart isOpen={isCartOpen} onClose={closeCart} />

      <Routes>
         <Route path="/" element={<Home openCart={openCart} />} />
         <Route path="/culture" element={<Culture openCart={openCart} />} />
         <Route path="/contact" element={<Contact openCart={openCart} />} />
         <Route path="/packages" element={<Packages openCart={openCart}/>} />
         <Route path="/services" element={<Services openCart={openCart} />} />
         <Route path="/caseStudies" element={<CaseStudies openCart={openCart} />} />
         <Route path="/about" element={<About openCart={openCart} />} />
         <Route path="/products/standart" element={<Standart />} />
        <Route path="/products/premium" element={<Premium />} />
        <Route path="/products/elite" element={<Elite />} />
        <Route path="*" element={<ErrorPage openCart={openCart} />} />
      </Routes>
    </Router>
  );
}

export default App;

