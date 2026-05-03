import { useEffect, useRef } from 'react';
import { ChevronRight, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-burger.jpg"
          alt="Gourmet Burger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-brand-darker/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="reveal opacity-0 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open 7 Days a Week
            </span>
          </div>

          <h1 className="reveal opacity-0 delay-100 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            BOOYAH!{' '}
            <span className="text-primary">WYOMING</span>
          </h1>

          <p className="reveal opacity-0 delay-200 text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-xl">
            Epic burgers, legendary wings, hand-tossed pizza, and hand-spun milkshakes. 
            Made fresh, made bold, made for you.
          </p>

          <div className="reveal opacity-0 delay-300 flex flex-wrap items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>2022 Wyoming Ave</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>11:00 AM - 9:00 PM</span>
            </div>
          </div>

          <div className="reveal opacity-0 delay-400 flex flex-wrap gap-4">
            <Button
              onClick={scrollToMenu}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all"
            >
              Order Online
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToMenu}
              className="border-white/20 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
    </section>
  );
}
