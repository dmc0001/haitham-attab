import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Exp />
        <Contact />
      </main>
      <footer className="footer container">
        <a
          className="wordmark"
          href="#home"
          aria-label="Haitham Attab, back to top"
        >
          ha<span>.</span>
        </a>
        <p>Thoughtfully built. Always improving.</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
        <span className="copyright">
          © {new Date().getFullYear()} Haitham Attab
        </span>
      </footer>
    </>
  );
}
