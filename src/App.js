import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./Views/About/About";
import CarBooking from "./Views/CarBooking/CarBooking";
import CarListing from "./Views/CarListings/CarListing";
import Contact from "./Views/Contact/Contact";
import Home from "./Views/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav childComp={<Home />} />} />
          <Route path="/about" element={<Nav childComp={<About />} />} />
          <Route path="/contact" element={<Nav childComp={<Contact />} />} />
          <Route
            path="/car-listing"
            element={<Nav childComp={<CarListing />} />}
          />
          <Route
            path="/car-booking"
            element={<Nav childComp={<CarBooking />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
