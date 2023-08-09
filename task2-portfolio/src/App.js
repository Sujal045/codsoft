import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Experience />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
