import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const jobOpenings = [
  {
    title: 'Senior AI Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build cutting-edge AI models for virtual try-on technology.'
  },
  {
    title: 'Computer Vision Researcher',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
    description: 'Research and develop advanced computer vision algorithms.'
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design beautiful and intuitive user experiences for our platform.'
  },
  {
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Build scalable web applications and APIs.'
  },
  {
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead marketing initiatives and grow our user base.'
  },
  {
    title: 'Data Scientist',
    department: 'Data',
    location: 'Remote',
    type: 'Full-time',
    description: 'Analyze user data and provide insights to improve our product.'
  }
];

export default function CareersPage() {
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
            <Link to="/about" className="text-slate-300 hover:text-white transition">About</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Join Our Team</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Help us build the future of fashion technology. Work with talented people who are passionate about innovation and making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Innovation First</h3>
              <p className="text-slate-300 text-sm">
                Work on cutting-edge AI and computer vision technology that's transforming the fashion industry.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Growth & Learning</h3>
              <p className="text-slate-300 text-sm">
                Continuous learning opportunities with conferences, courses, and mentorship from industry experts.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Work-Life Balance</h3>
              <p className="text-slate-300 text-sm">
                Flexible hours, remote work options, and generous PTO to maintain a healthy work-life balance.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition">
                        {job.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-slate-400">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:scale-105 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Competitive salary and equity packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Comprehensive health, dental, and vision insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>401(k) matching program</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Flexible work arrangements and remote options</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Unlimited PTO and flexible holidays</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Professional development budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Latest tech equipment and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Team events and company retreats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Link
              to="/contact"
              className="inline-block text-emerald-400 hover:text-emerald-300 font-semibold underline"
            >
              Get in touch with us
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
