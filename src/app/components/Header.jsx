'use client';
import { TerminalSquare, Flame, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f] shadow-[0_2px_12px_rgba(255,100,0,0.3)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <TerminalSquare size={30} className="text-[#f97316]" />
          <h1 className="text-2xl font-black tracking-wide text-[#f1f1f1]">
            <span className="text-[#f97316]">Bug</span>Beyond
          </h1>
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Blogs', 'Projects', 'Snippets', 'About'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-[#d1d1d1] font-semibold hover:text-[#22c55e] transition-all duration-200">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right: CTA / Icon */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black hover:scale-105 transition duration-200">
            Join Bug
          </button>
        </div>
      </div>
    </header>
  );
}
