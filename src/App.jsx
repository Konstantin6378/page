import "./App.css";
import { Context } from "./Context";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef } from "react";
import gsap from "gsap";
import Footer from "./Footer";
import About from "./About";
import Header from "./Header";

function App() {
  gsap.registerPlugin(ScrollToPlugin);
  const scrollRef = useRef(null);
  return (
    <Context.Provider value={{ scrollRef }}>
      <div className="container m-auto">
        <Header />
        <About />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
