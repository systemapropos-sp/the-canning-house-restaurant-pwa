import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-darker/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-black text-sm sm:text-base tracking-tighter">CH</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-base sm:text-lg tracking-tight leading-none group-hover:text-primary transition-colors">THE CANNING HOUSE</span>
              <span className="text-white/40 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase leading-none">Charming Authentic Cuisine</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors relative group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="tel:+15700000000" className="hidden sm:block text-white/60 hover:text-white text-sm font-medium transition-colors">Call Us</a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-brand-darker border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="text-white font-black text-xs">CH</span></div>
                    The Canning House
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 mt-6">
                  {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="text-white/60 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium transition-all">{link.label}</a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
