import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';
import Footer from '../components/Footer';

export default function PrivacyPage() {
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
           {/*  <Link to="/delete-account" className="text-slate-300 hover:text-white transition">Delete Account</Link>
           */}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-slate-300 text-lg">Last updated: October 6, 2025</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-emerald-400" />
                Introduction
              </h2>
              <p className="text-slate-300 leading-relaxed">
                StyleScope ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our virtual try-on application. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-emerald-400" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Photos you upload for virtual try-on purposes</li>
                    <li>Account information (email address, username)</li>
                    <li>Device information and identifiers</li>
                    <li>Usage data and app interactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Clothing Data</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Images of clothing items you upload</li>
                    <li>Virtual try-on results and preferences</li>
                    <li>Saved collections and favorites</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-400" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>To provide and maintain our virtual try-on service</li>
                <li>To process your photos and generate virtual try-on results</li>
                <li>To improve our AI algorithms and enhance accuracy</li>
                <li>To personalize your experience and provide recommendations</li>
                <li>To communicate with you about updates and features</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-emerald-400" />
                Data Security
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>End-to-end encryption for photo uploads and storage</li>
                <li>Secure cloud infrastructure with regular security audits</li>
                <li>Limited access to personal data by authorized personnel only</li>
                <li>Regular backups and disaster recovery procedures</li>
                <li>Automatic deletion of temporary processing data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We do not sell your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>With your explicit consent</li>
                <li>With service providers who assist in operating our app (under strict confidentiality agreements)</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
              <p className="text-slate-300 leading-relaxed mb-4">You have the following rights regarding your data:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct your information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="text-slate-300 mt-4">
                To exercise these rights, please visit our{' '}
                <Link to="/delete-account" className="text-emerald-400 hover:text-emerald-300 underline">
                  Delete Account
                </Link>{' '}
                page or contact us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Photo and Image Processing</h2>
              <p className="text-slate-300 leading-relaxed">
                Your photos are processed using AI technology to generate virtual try-on results. We store your photos securely and use them only for providing our service. You can delete your photos at any time through the app or by deleting your account. Processed images and temporary data are automatically deleted within 30 days unless saved by you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                StyleScope is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately, and we will take steps to remove it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              <p className="text-slate-300 leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to provide services. When you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-slate-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that your data receives adequate protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p className="text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Continued use of StyleScope after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-emerald-400" />
                Contact Us
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li><strong>Email:</strong> privacy@stylescope.app</li>
                <li><strong>Address:</strong> StyleScope Inc., 123 Fashion Street, San Francisco, CA 94103</li>
              </ul>
            </section>
          </div>

          <div className="text-center mt-8">
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
