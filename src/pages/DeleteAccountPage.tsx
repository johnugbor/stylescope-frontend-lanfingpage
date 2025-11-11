import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from('deletion_requests')
        .insert([
          {
            email,
            reason,
            additional_info: additionalInfo
          }
        ]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setEmail('');
      setReason('');
      setAdditionalInfo('');
    } catch (err: any) {
      setError(err.message || 'Failed to submit deletion request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="bg-slate-900 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/stylescope icon.png" alt="StyleScope" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">StyleScope</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link to="/privacy" className="text-slate-300 hover:text-white transition">Privacy</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6">
              <Trash2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Delete Account</h1>
            <p className="text-slate-300 text-lg">We're sorry to see you go</p>
          </div>

          {!submitted ? (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-2">Important Information</h3>
                    <ul className="text-sm text-slate-300 space-y-1">
                      <li>• This action is permanent and cannot be undone</li>
                      <li>• All your photos and virtual try-on data will be deleted</li>
                      <li>• Your saved clothing items and preferences will be removed</li>
                      <li>• You will lose access to your account immediately</li>
                      <li>• Data deletion will be completed within 30 days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-sm text-slate-400 mt-1">
                    Enter the email address associated with your StyleScope account
                  </p>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-white font-semibold mb-2">
                    Reason for Leaving *
                  </label>
                  <select
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                  >
                    <option value="">Select a reason</option>
                    <option value="privacy">Privacy concerns</option>
                    <option value="not-using">Not using the app anymore</option>
                    <option value="technical">Technical issues</option>
                    <option value="features">Missing features</option>
                    <option value="accuracy">Virtual try-on accuracy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-white font-semibold mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition resize-none"
                    placeholder="Tell us more about your decision (optional)"
                  />
                  <p className="text-sm text-slate-400 mt-1">
                    Your feedback helps us improve StyleScope for other users
                  </p>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-red-500/25 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Delete My Account'}
                  </button>
                  <Link
                    to="/"
                    className="flex-1 bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-slate-600 transition text-center"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Request Submitted</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                We've received your account deletion request. You will receive a confirmation email shortly.
                Your account and all associated data will be permanently deleted within 30 days.
              </p>
              <p className="text-slate-300 mb-8">
                If you change your mind, you can contact us at{' '}
                <a href="mailto:devjohnique@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">
                  devjohnique@gmail.com
                </a>{' '}
                within 7 days to cancel this request.
              </p>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105"
              >
                Return to Home
              </Link>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm">
              Need help?{' '}
              <a href="mailto:devjohnique@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">
                Contact Support
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
