import { MapPin, Clock, UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="The Canning House Restaurant" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/70 to-brand-darker/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/25 text-primary text-sm font-semibold">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              Charming Authentic Cuisine
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            THE <span className="text-primary">CANNING</span><br />HOUSE
          </h1>

          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/60 leading-relaxed mb-8 max-w-lg">
            Farm-to-table brunch, handcrafted sandwiches, and elevated comfort food 
            in a warm, welcoming atmosphere.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-wrap items-center gap-5 mb-10 text-white/50 text-sm">
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /><span>Wyoming, PA</span></div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /><span>Brunch Daily</span></div>
          </div>

          <div className="animate-fade-in-up delay-400">
            <button onClick={scrollToMenu} className="bg-primary hover:bg-primary/85 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-base">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
    </section>
  );
}
