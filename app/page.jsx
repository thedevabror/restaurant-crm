import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div className="p-3 lg:px-20 py-5">
        <div className="hero-section">
          <Header />
          <Hero />
        </div>
        <About />
        <Features />
      </div>
      <Footer />
    </div>
  );
}
