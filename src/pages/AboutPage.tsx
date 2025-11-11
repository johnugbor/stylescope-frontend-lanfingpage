import { Link } from 'react-router-dom';
import { Sparkles, Target, Zap, Users } from 'lucide-react';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/stylescope icon.png" alt="StyleScope" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">StyleScope</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
            <Link to="/careers" className="text-slate-300 hover:text-white transition">Careers</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">About StyleScope</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              An AI fashion company with focus on creating cutting edge applications for the fashion industry
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                StyleScope was founded with a simple yet powerful vision: to revolutionize how people experience fashion online. We recognized that one of the biggest challenges in online shopping is the inability to try on clothes before purchasing, leading to high return rates and customer dissatisfaction.
              </p>
              <p>
                Leveraging cutting-edge artificial intelligence and computer vision technology, we developed a virtual try-on solution that allows customers to see themselves in any outfit before making a purchase. Our technology bridges the gap between physical and digital shopping experiences, making online fashion more accessible, convenient, and enjoyable.
              </p>
              <p>
                Today, StyleScope serves thousands of users worldwide, helping them make confident fashion choices while reducing returns and environmental waste. We're committed to pushing the boundaries of AI technology to create innovative solutions that benefit both consumers and the fashion industry.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-4">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-300">
                To transform the fashion industry through innovative AI technology that empowers consumers and businesses alike.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-2xl mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-slate-300">
                We continuously push the boundaries of what's possible with AI and computer vision technology.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Customer First</h3>
              <p className="text-slate-300">
                Every decision we make prioritizes the user experience and privacy of our customers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovation & Excellence</h3>
                <p>We strive for excellence in everything we do, continuously innovating to stay at the forefront of AI fashion technology.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Privacy & Security</h3>
                <p>We take user privacy seriously, implementing robust security measures to protect personal data and images.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Sustainability</h3>
                <p>By reducing returns and enabling better purchase decisions, we contribute to a more sustainable fashion industry.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Inclusivity</h3>
                <p>We believe fashion is for everyone and build technology that works for all body types, skin tones, and styles.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you're a fashion enthusiast, a retailer looking to enhance your online presence, or a talented individual wanting to join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                to="/careers"
                className="bg-slate-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-slate-600 transition"
              >
                View Careers
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
