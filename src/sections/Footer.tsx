import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-lg">B!</span>
              </div>
              <div>
                <span className="text-white font-black text-xl tracking-tight">BOOYAH!</span>
                <span className="text-white/50 text-sm ml-2">Wyoming</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Epic burgers, legendary wings, hand-tossed pizza, and hand-spun milkshakes. 
              Made fresh daily in Wyoming, PA.
            </p>
            <div className="flex items-center gap-4 mt-4 text-white/40 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>2022 Wyoming Ave</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>11AM - 9PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '#menu', label: 'Menu' },
                { href: '#about', label: 'About' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/40 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+15703332222"
                  className="text-white/40 hover:text-primary text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3 h-3" />
                  (570) 333-2222
                </a>
              </li>
              <li>
                <span className="text-white/40 text-sm flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  Wyoming, PA 18644
                </span>
              </li>
              <li>
                <a
                  href="https://www.booyahburgers.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-primary text-sm transition-colors"
                >
                  booyahburgers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs flex items-center gap-1">
            &copy; {currentYear} BOOYAH! Wyoming. Made with <Heart className="w-3 h-3 text-primary" /> in PA
          </p>
          <p className="text-white/30 text-xs">
            Open 7 Days a Week | 11:00 AM - 9:00 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
