import Home from "./components/Home"
import Header from "./components/Header"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
      <Home />
      </main>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};
export default App;