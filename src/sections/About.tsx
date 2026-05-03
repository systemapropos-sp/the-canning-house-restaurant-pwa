import { MapPin, Phone, Clock, Star, Truck, ChefHat, Award } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: 'Made Fresh Daily',
    description: 'Every burger is smashed to order, every wing is hand-tossed in our signature sauces.',
  },
  {
    icon: Star,
    title: 'Premium Ingredients',
    description: 'We use only the finest Angus beef, fresh produce, and house-made sauces.',
  },
  {
    icon: Truck,
    title: 'Fast & Reliable',
    description: 'Quick pickup and local delivery so your food arrives hot and fresh.',
  },
  {
    icon: Award,
    title: 'Local Favorite',
    description: 'Voted best burgers in Wyoming by our amazing community of food lovers.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Bold Flavors,{' '}
              <span className="text-primary">Big Attitude</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              At BOOYAH! Wyoming, we do not just serve food — we serve an experience. 
              Our smash burgers are pressed to perfection, our wings are tossed in 
              15+ house-made sauces, and our hand-spun milkshakes are the stuff of legend.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Located in the heart of Wyoming at 2022 Wyoming Ave, we are open 7 days 
              a week to satisfy your cravings. Whether you are here for lunch, dinner, 
              or a late-night shake, we have got you covered.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">{feature.title}</h3>
                      <p className="text-white/40 text-xs mt-1">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Location Card */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-white/5">
              {/* Simulated Map Background */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-brand-dark flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2">Find Us</h3>
                  <p className="text-white/60 text-lg mb-1">2022 Wyoming Ave</p>
                  <p className="text-white/40 text-sm">Wyoming, PA 18644</p>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-white/5 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-white font-bold text-sm">Open 7 Days</p>
                <p className="text-white/40 text-xs">11AM - 9PM</p>
              </div>
              <a
                href="tel:+15703332222"
                className="p-4 rounded-xl bg-card border border-white/5 text-center hover:border-primary/30 transition-colors"
              >
                <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-white font-bold text-sm">Call Us</p>
                <p className="text-white/40 text-xs">(570) 333-2222</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
