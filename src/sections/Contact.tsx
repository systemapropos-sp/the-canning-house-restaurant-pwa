import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Visit Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">Come Say Hello</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">We would love to see you. Stop by for brunch, lunch, or just because.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Location</h3>
            <p className="text-white/50 text-sm">Wyoming, PA</p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Phone</h3>
            <a href="tel:+15700000000" className="text-primary font-bold hover:underline">Call Us</a>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">Hours</h3>
            <p className="text-white/50 text-sm">Brunch Daily</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Follow us</p>
          <div className="flex justify-center gap-4">
            {[{ icon: Instagram, href: '#' }, { icon: Facebook, href: '#' }, { icon: Mail, href: 'mailto:hello@canninghouse.com' }].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-primary/30 transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
