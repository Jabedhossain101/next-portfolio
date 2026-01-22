import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-cyan-400"
        >
          DEV.PORTFOLIO
        </Link>
        <div className="space-x-8 text-sm font-medium">
          <Link href="#about" className="hover:text-cyan-400 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
