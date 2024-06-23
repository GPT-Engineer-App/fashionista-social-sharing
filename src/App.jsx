import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import VirtualTryOn from "./pages/VirtualTryOn.jsx";
import ARFashionShows from "./pages/ARFashionShows.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/virtual-try-on" element={<VirtualTryOn />} />
        <Route exact path="/ar-fashion-shows" element={<ARFashionShows />} />
      </Routes>
    </Router>
  );
}

export default App;