import { Link } from 'react-router-dom';
import { FileText, Scale, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-300 text-lg">Last updated: October 6, 2025</p>
          </div>

          {/* Agreement to Terms */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Scale className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              Agreement to Terms
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Welcome to StyleScope. By accessing or using our application, website, or services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our Service.
            </p>
          </div>

          {/* Use of Service */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Use of Service</h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">Eligibility</h3>
                <p>You must be at least 13 years of age to use StyleScope. By using our Service, you represent and warrant that you meet this age requirement.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Account Registration</h3>
                <p>To access certain features, you may need to create an account. You agree to provide accurate information and maintain account security.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Acceptable Use</h3>
                <p>You agree not to upload illegal content, impersonate others, or interfere with the Service.</p>
              </div>
            </div>
          </div>

          {/* User Content */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">User Content</h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">Your Content</h3>
                <p>You retain ownership of photos and content you upload. By uploading, you grant us a limited license to process and display your content for providing the virtual try-on service.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Content Guidelines</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Must be legally owned or licensed by you</li>
                  <li>No nudity or sexually explicit material</li>
                  <li>Must not violate third-party rights</li>
                  <li>Must comply with applicable laws</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              The Service, including all software, algorithms, designs, and content (excluding user-generated content), is owned by StyleScope and protected by intellectual property laws. You may not copy, modify, or distribute our Service without written permission.
            </p>
          </div>

          {/* Virtual Try-On Service */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Virtual Try-On Service</h2>
            <div className="text-slate-300 text-sm md:text-base">
              <p className="mb-3">Our virtual try-on technology provides visual representations for informational purposes only. We make no guarantees about perfect accuracy of fit, color matching, or fabric representation.</p>
              <p>Virtual try-on results should be used as a guide only. We recommend checking size charts and return policies before purchasing.</p>
            </div>
          </div>

          {/* Additional Terms */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Privacy and Data</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Your use of the Service is governed by our{' '}
                  <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                    Privacy Policy
                  </Link>
                  , which describes how we collect, use, and protect your personal information.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Disclaimers</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  The Service is provided "as is" without warranties. StyleScope shall not be liable for indirect, incidental, or consequential damages.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Termination</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  We reserve the right to suspend or terminate your access to the Service at any time for violation of these Terms or other reasons.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Changes to Terms</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  We may modify these Terms at any time. Continued use after changes constitutes acceptance of the updated Terms.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-block text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
