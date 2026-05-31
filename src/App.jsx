import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { Overview } from "./components/Overview.jsx";
import { Qualifications } from "./components/Qualifications.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Qualifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
