import { Link } from 'react-router-dom';
import { Sparkles, Upload, User, ShoppingBag } from 'lucide-react';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/stylescope icon.png" alt="StyleScope" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">StyleScope</span>
          </div>
         {/*  <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-slate-300 hover:text-white transition">Privacy</Link>
            <Link to="/delete-account" className="text-slate-300 hover:text-white transition">Delete Account</Link>
          </div> */}
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">Virtual Try-On Technology</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              See Yourself in Any Outfit<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Before You Buy
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              StyleScope uses advanced AI to let you virtually try on clothes with your own photos.
              Experience the future of online shopping.
            </p>
            <a
              href="https://forms.gle/3zkvG7tYdpcmG5e36"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105"
            >
              Join Waitlist
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20" id="how-it-works">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Set Your Picture</h3>
              <p className="text-slate-300 mb-4">
                Upload your photo to create your virtual model. Our AI will analyze your features for accurate fitting.
              </p>
              <img
                src="/set-your-picture1.jpg"
                alt="Set your picture"
                className="w-full rounded-lg border border-slate-700"
              />
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Upload Clothes</h3>
              <p className="text-slate-300 mb-4">
                Add clothing items you want to try on. Browse through your collection anytime.
              </p>
              <img
                src="/upload cloths copy.jpg"
                alt="Upload clothes"
                className="w-full rounded-lg border border-slate-700"
              />
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-emerald-500/50 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">See Yourself</h3>
              <p className="text-slate-300 mb-4">
                Tap 3 times on any clothing item to instantly see how it looks on you.
              </p>
              <img
                src="/tab 3 times on a cloth to see yourself on it1.jpg"
                alt="Virtual try-on"
                className="w-full rounded-lg border border-slate-700"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Shopping?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing the future of fashion with StyleScope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://forms.gle/3zkvG7tYdpcmG5e36" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105">
                Request Early Access
              </a>
              <a href="https://forms.gle/3zkvG7tYdpcmG5e36" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white font-semibold px-8 py-4 rounded-full border border-slate-700 hover:shadow-xl transition-all transform hover:scale-105">
                Request Early Access
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
