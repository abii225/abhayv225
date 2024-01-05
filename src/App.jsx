import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-600">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <Header />
        <Banner />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />

        <div className="h-[150px]"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
