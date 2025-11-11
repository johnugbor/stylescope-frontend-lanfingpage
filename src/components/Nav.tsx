export default function Nav() {
  return (
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
  );
}