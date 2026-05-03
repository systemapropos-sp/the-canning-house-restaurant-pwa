import { Leaf, Heart, Clock } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Farm-to-Table', desc: 'We source fresh, local ingredients to craft dishes that celebrate the seasons.' },
  { icon: Heart, title: 'Made with Love', desc: 'Every dish is handcrafted from scratch with passion and attention to detail.' },
  { icon: Clock, title: 'Brunch All Day', desc: 'Your favorite brunch dishes served whenever the craving strikes.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6">
              Where <span className="text-primary">Good Food</span><br />Meets Good Company
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-6">
              The Canning House is more than a restaurant — it is a gathering place. 
              We believe in the power of a shared meal, the comfort of elevated classics, 
              and the joy of discovering something new on your plate.
            </p>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              From our signature fried chicken & waffles to our carefully crafted sandwiches, 
              every item on our menu is designed to delight. Whether you are here for a 
              leisurely brunch or a quick bite, you are family.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {features.map(f => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <Icon className="w-6 h-6 text-primary mb-2" />
                    <h3 className="text-white font-bold text-sm">{f.title}</h3>
                    <p className="text-white/30 text-xs mt-1">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/images/brunch.jpg" alt="The Canning House Food" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-4 sm:p-6 rounded-xl bg-primary text-white">
              <p className="text-3xl sm:text-4xl font-black">50+</p>
              <p className="text-white/70 text-xs sm:text-sm">Unique Menu Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
