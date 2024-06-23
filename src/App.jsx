import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import VirtualTryOn from "./components/VirtualTryOn.jsx";
import ARFashionShow from "./components/ARFashionShow.jsx";
import PersonalizedSuggestions from "./components/PersonalizedSuggestions.jsx";
import FeaturedContent from "./components/FeaturedContent.jsx";
import CollaborationFacilitation from "./components/CollaborationFacilitation.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/virtual-try-on" element={<VirtualTryOn />} />
        <Route exact path="/ar-fashion-show" element={<ARFashionShow />} />
        <Route exact path="/personalized-suggestions" element={<PersonalizedSuggestions />} />
        <Route exact path="/featured-content" element={<FeaturedContent />} />
        <Route exact path="/collaboration-facilitation" element={<CollaborationFacilitation />} />
      </Routes>
    </Router>
  );
}

export default App;