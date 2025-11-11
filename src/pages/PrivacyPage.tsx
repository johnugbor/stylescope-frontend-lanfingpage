import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-lg">Last updated: November 11, 2025</p>
          </div>

          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              Introduction
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              StyleScope ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our virtual try-on application.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Database className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-slate-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Photos you upload for virtual try-on</li>
                  <li>Account information (email, username)</li>
                  <li>Device information and usage data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Clothing Data</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Images of clothing items you upload</li>
                  <li>Virtual try-on results and preferences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4 text-sm md:text-base">
              <li>Provide and maintain our virtual try-on service</li>
              <li>Process photos and generate virtual try-on results</li>
              <li>Improve our AI algorithms and enhance accuracy</li>
              <li>Personalize your experience</li>
              <li>Communicate updates and features</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              Data Security
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4 text-sm md:text-base">
              <li>End-to-end encryption for photo uploads</li>
              <li>Secure cloud infrastructure with regular audits</li>
              <li>Limited access by authorized personnel only</li>
              <li>Automatic deletion of temporary data</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">You have the following rights:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4 text-sm md:text-base">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Update your information</li>
              <li><strong>Deletion:</strong> Request account deletion</li>
              <li><strong>Portability:</strong> Receive data in portable format</li>
            </ul>
            <p className="text-slate-300 mt-4 text-sm md:text-base">
              To exercise these rights, visit our{' '}
              <Link to="/delete-account" className="text-emerald-400 hover:text-emerald-300 underline">
                Delete Account
              </Link>{' '}
              page or contact us directly.
            </p>
          </div>

          {/* Additional Sections */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 md:p-8 mb-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Photo Processing</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  Photos are processed using AI for virtual try-on results. We store photos securely and you can delete them anytime. Processed images are automatically deleted within 30 days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Data Retention</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  We retain your information while your account is active. When you delete your account, personal data is deleted within 30 days.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">Children's Privacy</h3>
                <p className="text-slate-300 text-sm md:text-base">
                  StyleScope is not intended for children under 13. We do not knowingly collect information from children under 13.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              Contact Us
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
              Questions about this Privacy Policy? Contact us:
            </p>
            <p className="text-slate-300 text-sm md:text-base">
              <strong>Email:</strong> devjohnique@gmail.com
            </p>
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
