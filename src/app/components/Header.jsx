// 'use client';
// import { TerminalSquare, Flame, Code2 } from 'lucide-react';
// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="w-full sticky top-0 z-50 bg-[#0a0a0a] border-b border-[#1f1f1f] shadow-[0_2px_12px_rgba(255,100,0,0.3)]">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
//         {/* Left: Logo */}
//         <div className="flex items-center space-x-3">
//           <TerminalSquare size={30} className="text-[#f97316]" />
//           <h1 className="text-2xl font-black tracking-wide text-[#f1f1f1]">
//             <span className="text-[#f97316]">Bug</span>Beyond
//           </h1>
//         </div>

//         {/* Center Nav */}
//         <nav className="hidden md:flex items-center space-x-8">
//           {['Home', 'Blogs', 'Projects', 'Snippets', 'About'].map((item) => (
//             <Link key={item} href={`/${item.toLowerCase()}`} className="text-[#d1d1d1] font-semibold hover:text-[#22c55e] transition-all duration-200">
//               {item}
//             </Link>
//           ))}
//         </nav>

//         {/* Right: CTA / Icon */}
//         <div className="flex items-center space-x-3">
//           <button className="px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black hover:scale-105 transition duration-200">
//             Join Bug
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';
import { useState } from 'react';
import { TerminalSquare, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ['Home', 'Blogs', 'Projects', 'Snippets', 'About'];

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-[#d1d1d1] font-semibold hover:text-[#22c55e] transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:inline-block px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black hover:scale-105 transition duration-200">
            Join Bug
          </button>

          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] px-6 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-[#d1d1d1] font-medium hover:text-[#22c55e] transition"
            >
              {item}
            </Link>
          ))}

          <button className="w-full mt-2 px-4 py-2 font-semibold rounded-lg bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black hover:scale-105 transition duration-200">
            Join Bug
          </button>
        </div>
      )}
    </header>
  );
}
