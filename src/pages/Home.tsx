import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import MenuCategories from '@/sections/MenuCategories';
import FullMenu from '@/sections/FullMenu';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import CartDrawer from '@/sections/CartDrawer';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <MenuCategories />
          <FullMenu />
          <About />
          <Contact />
        </main>
        <Footer />
        <CartDrawer />
        <Toaster 
          position="bottom-right" 
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </div>
    </CartProvider>
  );
}
