import { useEffect, useRef } from 'react';
import { Flame, Drumstick, Pizza, Salad, IceCreamCone, CookingPot, UtensilsCrossed } from 'lucide-react';

const categories = [
  {
    name: 'Burgers',
    image: '/images/hero-burger.jpg',
    icon: Flame,
    description: 'Smashed, stacked & sauced',
    count: '12 items',
  },
  {
    name: 'Chicken & Wings',
    image: '/images/chicken-wings.jpg',
    icon: Drumstick,
    description: 'Boneless, bone-in & tenders',
    count: '10 items',
  },
  {
    name: 'Pizza',
    image: '/images/pizza.jpg',
    icon: Pizza,
    description: 'Hand-tossed specialty pies',
    count: '8 items',
  },
  {
    name: 'Starters',
    image: '/images/starters.jpg',
    icon: UtensilsCrossed,
    description: 'Nachos, rings & more',
    count: '8 items',
  },
  {
    name: 'Salads',
    image: '/images/salads.jpg',
    icon: Salad,
    description: 'Fresh from the garden',
    count: '4 items',
  },
  {
    name: 'Loaded Fries',
    image: '/images/loaded-fries.jpg',
    icon: CookingPot,
    description: 'Hand-cut & loaded up',
    count: '6 items',
  },
  {
    name: 'Milkshakes',
    image: '/images/milkshakes.jpg',
    icon: IceCreamCone,
    description: 'Hand-spun classics',
    count: '15+ flavors',
  },
];

export default function MenuCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.category-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in-up');
                card.classList.remove('opacity-0');
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Something for Everyone
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            From epic smash burgers to hand-spun milkshakes, explore our full menu of bold flavors
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={scrollToMenu}
                className="category-card opacity-0 group relative overflow-hidden rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-glow text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-white/40 text-xs">{category.count}</span>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm">{category.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
