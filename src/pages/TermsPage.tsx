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
            <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-slate-300 text-lg">Last updated: October 6, 2025</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-emerald-400" />
                Agreement to Terms
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Welcome to StyleScope. By accessing or using our application, website, or services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Service</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Eligibility</h3>
                  <p>You must be at least 13 years of age to use StyleScope. By using our Service, you represent and warrant that you meet this age requirement.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Account Registration</h3>
                  <p>To access certain features, you may need to create an account. You agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Acceptable Use</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Upload content that is illegal, harmful, or offensive</li>
                    <li>Impersonate any person or entity</li>
                    <li>Interfere with or disrupt the Service</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the Service for commercial purposes without permission</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">User Content</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Your Content</h3>
                  <p>You retain ownership of photos and content you upload to StyleScope. By uploading content, you grant us a limited license to process, store, and display your content solely for providing the virtual try-on service.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Content Guidelines</h3>
                  <p>All uploaded content must:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Be legally owned or licensed by you</li>
                    <li>Not contain nudity or sexually explicit material</li>
                    <li>Not violate any third-party rights</li>
                    <li>Not contain malicious code or viruses</li>
                    <li>Comply with applicable laws and regulations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Content Removal</h3>
                  <p>We reserve the right to remove any content that violates these Terms or is otherwise objectionable, without prior notice.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                The Service, including all software, algorithms, designs, text, graphics, logos, and other content (excluding user-generated content), is owned by StyleScope and protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-slate-300 leading-relaxed">
                You may not copy, modify, distribute, sell, or lease any part of our Service or included software, nor may you reverse engineer or attempt to extract the source code, unless laws prohibit these restrictions or you have our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Virtual Try-On Service</h2>
              <div className="space-y-4 text-slate-300">
                <p>Our virtual try-on technology provides visual representations for informational purposes only. We make no guarantees about:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Perfect accuracy of fit or appearance</li>
                  <li>Color matching due to device display variations</li>
                  <li>Exact representation of fabric texture or drape</li>
                  <li>Results being identical to physical try-on</li>
                </ul>
                <p className="mt-4">
                  Virtual try-on results should be used as a guide only. We recommend checking size charts and return policies before purchasing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Privacy and Data</h2>
              <p className="text-slate-300 leading-relaxed">
                Your use of the Service is also governed by our{' '}
                <Link to="/privacy" className="text-emerald-400 hover:text-emerald-300 underline">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-slate-300 leading-relaxed">
                Our Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of third-party sites. You access them at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimers and Limitations of Liability</h2>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h3 className="text-white font-semibold mb-2">Service "As Is"</h3>
                  <p>
                    The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Limitation of Liability</h3>
                  <p>
                    To the maximum extent permitted by law, StyleScope shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Service.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
              <p className="text-slate-300 leading-relaxed">
                You agree to indemnify and hold harmless StyleScope, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. Reasons for termination may include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-300 ml-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>At your request</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-slate-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of San Francisco County, California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Severability</h2>
              <p className="text-slate-300 leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
              </p>
            </section>

           {/*  <section className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-emerald-400" />
                Contact Information
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li><strong>Email:</strong> legal@stylescope.app</li>
                <li><strong>Mail:</strong> StyleScope Inc., 123 Fashion Street, San Francisco, CA 94103</li>
                <li>
                  <strong>Contact Form:</strong>{' '}
                  <Link to="/contact" className="text-emerald-400 hover:text-emerald-300 underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </section> */}
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
