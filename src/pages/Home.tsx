import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import MenuSection from '@/sections/MenuSection';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
