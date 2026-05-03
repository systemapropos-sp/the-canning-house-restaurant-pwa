import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-black text-xs">CH</span>
            </div>
            <span className="text-white font-bold text-sm">THE CANNING HOUSE</span>
          </div>
          <p className="text-white/30 text-xs flex items-center gap-1">
            &copy; {year} The Canning House. Made with <Heart className="w-3 h-3 text-primary" /> in Pennsylvania
          </p>
        </div>
      </div>
    </footer>
  );
}
