import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (insertError) throw insertError;

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
{/*       <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/stylescope icon.png" alt="StyleScope" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">StyleScope</span>
          </Link>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white transition">Home</Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition">About</Link>
            <Link to="/careers" className="text-slate-300 hover:text-white transition">Careers</Link>
          </div>
        </div>
      </nav> */}

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-full mb-4">
                <Mail className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-slate-300 text-sm">devjohnique@gmail.com</p>
              <p className="text-slate-400 text-xs mt-1">We'll respond within 24 hours</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/20 rounded-full mb-4">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
              <p className="text-slate-400 text-xs mt-1">Mon-Fri 9am-6pm PST</p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Office</h3>
              <p className="text-slate-300 text-sm">123 Fashion Street</p>
              <p className="text-slate-400 text-xs mt-1">San Francisco, CA 94103</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="business">Business Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-6 py-4 rounded-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
                <p className="text-slate-300 mb-6">
                  Thank you for contacting us. We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
