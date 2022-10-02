import "./App.css";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/Navbar/NavBar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
