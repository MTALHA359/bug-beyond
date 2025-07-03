'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clipboard, ClipboardCheck, PlusCircle } from 'lucide-react';

const snippetCategories = [
  'React', 'JavaScript', 'Next.js', 'UI Tricks', 'Performance'
];

const snippets = [
  {
    title: "Dark Mode Toggle (React)",
    category: "React",
    description: "Toggle dark/light theme using useState.",
    code: `const [dark, setDark] = useState(false);\ndocument.body.classList.toggle('dark', dark);`,
  },
  {
    title: "Copy to Clipboard",
    category: "JavaScript",
    description: "Copy text to clipboard using the Clipboard API.",
    code: `navigator.clipboard.writeText("Your text here");`,
  },
  {
    title: "Scroll to Element",
    category: "UI Tricks",
    description: "Smooth scroll to a section of the page.",
    code: `document.getElementById("target").scrollIntoView({ behavior: "smooth" });`,
  },
  {
    title: "Throttle Function",
    category: "Performance",
    description: "Limit how often a function runs.",
    code: `function throttle(fn, delay) {\n  let last = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - last > delay) {\n      last = now;\n      fn(...args);\n    }\n  };\n}`,
  },
  {
    title: "Debounce Function",
    category: "Performance",
    description: "Prevent a function from firing too often.",
    code: `function debounce(fn, delay) {\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  };\n}`,
  },
  {
    title: "Dynamic Import (Next.js)",
    category: "Next.js",
    description: "Dynamically import a component only when needed.",
    code: `const MyComponent = dynamic(() => import('../components/MyComponent'))`,
  },
];

export default function SnippetsPage() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = async (code, index) => {
    await navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const filteredSnippets = snippets.filter((s) =>
    (selectedCategory === 'All' || s.category === selectedCategory) &&
    (s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="bg-[#0b0b0b] min-h-screen text-white px-6 py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-[#22c55e] mb-3">
        📌 Useful Code Snippets
      </h1>
      <p className="text-center text-gray-400 mb-10">
        Handy snippets to speed up your development workflow.
      </p>

      {/* 🔍 Search */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search snippets..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded bg-[#111] text-white border border-[#222] focus:outline-[#22c55e]"
        />
      </div>

      {/* 🔘 Filter Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedCategory === 'All'
              ? 'bg-[#22c55e] text-black'
              : 'bg-[#111] text-white border border-[#333] hover:border-[#22c55e]'
          }`}
        >
          All
        </button>
        {snippetCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedCategory === cat
                ? 'bg-[#22c55e] text-black'
                : 'bg-[#111] text-white border border-[#333] hover:border-[#22c55e]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📁 Snippets Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {filteredSnippets.map((snip, i) => (
          <motion.div
            key={snip.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#111] p-6 rounded-xl border border-[#222] hover:shadow-[0_0_20px_#22c55e99] transition"
          >
            <h2 className="text-xl font-bold text-[#f97316] mb-2">{snip.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{snip.description}</p>
            <div className="relative">
              <pre className="bg-[#1e1e1e] text-sm p-3 rounded text-green-400 whitespace-pre-wrap overflow-auto">
                {snip.code}
              </pre>
              <button
                onClick={() => handleCopy(snip.code, i)}
                className="absolute top-2 right-2 text-white hover:text-[#22c55e]"
              >
                {copiedIndex === i ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
              </button>
            </div>
            <span className="text-xs text-[#22c55e] mt-2 inline-block">{snip.category}</span>
          </motion.div>
        ))}
      </div>

      {/* ✨ Popular Snippets */}
      <section className="max-w-5xl mx-auto py-10 border-t border-[#222]">
        <h3 className="text-2xl font-bold text-[#f97316] mb-6">🔥 Popular Snippets</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
          <li>How to use React useEffect with cleanup</li>
          <li>Lazy loading components in Next.js</li>
          <li>Improving performance with memoization</li>
        </ul>
      </section>

      {/* ➕ Add Snippet Prompt */}
      <section className="bg-[#111] p-10 mt-16 rounded-lg text-center max-w-4xl mx-auto border border-[#222]">
        <h3 className="text-2xl font-bold text-[#22c55e]">Want to add your own snippet?</h3>
        <p className="text-gray-400 mt-2 mb-4">Submit your favorite tips & tricks!</p>
        <button className="bg-[#f97316] text-black px-6 py-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:scale-105 transition">
          <PlusCircle size={18} /> Submit Snippet (coming soon)
        </button>
      </section>

      {/* 💬 Community Tips Placeholder */}
      <section className="mt-20 text-center text-sm text-gray-500">
        💬 Community tips, comments, and ratings coming soon...
      </section>
    </main>
  );
}
