import { MapPin, Phone, Clock, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            Visit or Order Today
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            We are always here to serve you. Stop by, call ahead, or order online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Address */}
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center hover:border-primary/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Location</h3>
            <p className="text-white/60 text-sm">2022 Wyoming Ave</p>
            <p className="text-white/40 text-sm">Wyoming, PA 18644</p>
            <a
              href="https://maps.google.com/?q=2022+Wyoming+Ave+Wyoming+PA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 hover:underline"
            >
              Get Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center hover:border-primary/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
            <p className="text-white/60 text-sm">Call or Text</p>
            <a
              href="tel:+15703332222"
              className="text-primary text-lg font-bold mt-1 hover:underline block"
            >
              (570) 333-2222
            </a>
            <p className="text-white/40 text-xs mt-2">Call ahead for faster pickup</p>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl bg-card border border-white/5 text-center hover:border-primary/20 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Hours</h3>
            <p className="text-white/60 text-sm">7 Days a Week</p>
            <p className="text-primary text-lg font-bold mt-1">11:00 AM - 9:00 PM</p>
            <p className="text-white/40 text-xs mt-2">Lunch specials Mon-Fri 11am-3pm</p>
          </div>
        </div>

        {/* Social & Online */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm mb-4">Follow us and order online</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/booyahburgers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/booyahburgers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@booyahburgers.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <div className="mt-6">
            <a
              href="https://www.booyahburgers.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-5 rounded-full shadow-glow">
                Order Online at BOOYAHBURGERS.COM
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
