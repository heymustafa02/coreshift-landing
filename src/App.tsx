import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Integrations />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
