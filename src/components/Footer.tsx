import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/stylescope icon.png" alt="StyleScope" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">StyleScope</span>
            </div>
            <p className="text-slate-400 text-sm">
              Virtual try-on technology that brings the fitting room to your phone.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="/#features" className="hover:text-white transition">Features</a></li>
              <li><a href="/#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="/#download" className="hover:text-white transition">Download</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
             {/*  <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
             */}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/delete-account" className="hover:text-white transition">Delete Account</Link></li>
           
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 StyleScope. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
