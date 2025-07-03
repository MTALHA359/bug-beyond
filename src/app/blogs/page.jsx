

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const blogs = [
  {
    title: '🧠 Debugging Like a Pro',
    desc: 'Master modern debugging tools and mental models that save hours of stress.',
    date: 'July 2, 2025',
    slug: 'debugging-like-a-pro',
  },
  {
    title: '💥 Top 10 JavaScript Mistakes to Avoid',
    desc: 'Avoid these common JS traps that plague beginners and pros alike.',
    date: 'June 29, 2025',
    slug: 'common-js-mistakes',
  },
  {
    title: '🔥 Next.js App Router Deep Dive',
    desc: 'All about layouts, loading states, and how to structure modern apps.',
    date: 'June 22, 2025',
    slug: 'nextjs-app-router-guide',
  },
  {
    title: '🤖 AI Tools for Bug Hunters',
    desc: 'Best AI tools to analyze code, squash bugs, and write faster.',
    date: 'June 15, 2025',
    slug: 'ai-tools-for-devs',
  },
  {
    title: '🚀 Boost Productivity with Dev Shortcuts',
    desc: 'Work 2x faster with these command line, VS Code, and Git hacks.',
    date: 'June 10, 2025',
    slug: 'productivity-dev-shortcuts',
  },
  {
    title: '🎨 CSS Tricks You Should Know in 2025',
    desc: 'CSS has leveled up: subgrid, container queries, and more.',
    date: 'June 5, 2025',
    slug: 'css-tricks-2025',
  },
  {
    title: '🌙 Dark Mode Implementation Tips',
    desc: 'Build a smooth dark mode toggle using Tailwind and media queries.',
    date: 'May 29, 2025',
    slug: 'dark-mode-tips',
  },
  {
    title: '⚡ Optimizing React Performance',
    desc: 'Learn how to avoid unnecessary re-renders and boost app speed.',
    date: 'May 20, 2025',
    slug: 'react-performance-tips',
  },
  {
    title: '🔧 10 Git Tips Every Developer Should Know',
    desc: 'Master cherry-pick, rebase, stash, bisect, and more.',
    date: 'May 15, 2025',
    slug: 'git-tips',
  },
  {
    title: '📦 NPM Scripts Mastery',
    desc: 'Custom NPM scripts can save you tons of time. Here’s how.',
    date: 'May 10, 2025',
    slug: 'npm-scripts-guide',
  },
  {
    title: '🧪 Unit Testing Simplified',
    desc: 'How to confidently write and organize tests with Vitest or Jest.',
    date: 'May 5, 2025',
    slug: 'unit-testing-guide',
  },
  {
    title: '📐 Responsive Design Principles',
    desc: 'Build mobile-first layouts that look great on all screen sizes.',
    date: 'May 1, 2025',
    slug: 'responsive-design',
  },
  {
    title: '🌐 SEO for Developers',
    desc: 'Basic SEO tricks to rank higher on Google, even for React/Next.js.',
    date: 'April 25, 2025',
    slug: 'seo-for-developers',
  },
  {
    title: '📁 Folder Structure for Large Projects',
    desc: 'Scalable, clean folder structure patterns for React and Next.js apps.',
    date: 'April 20, 2025',
    slug: 'folder-structure-patterns',
  },
  {
    title: '📊 Building Charts in React',
    desc: 'Learn how to use Recharts and Chart.js to visualize your data.',
    date: 'April 15, 2025',
    slug: 'react-charts',
  },
  {
    title: '🌍 Deploying on Vercel vs Netlify',
    desc: 'Pros and cons of two leading JAMstack deployment platforms.',
    date: 'April 10, 2025',
    slug: 'vercel-vs-netlify',
  },
  {
    title: '🧵 UseContext vs Redux in 2025',
    desc: 'When to use simple context or go for full global state.',
    date: 'April 5, 2025',
    slug: 'context-vs-redux',
  },
  {
    title: '💻 Setup a Fast Dev Environment',
    desc: 'From terminal to editor to browser extensions — optimize everything.',
    date: 'March 30, 2025',
    slug: 'fast-dev-setup',
  },
  {
    title: '📦 Understanding Package Managers',
    desc: 'Yarn, npm, pnpm — what’s the difference?',
    date: 'March 25, 2025',
    slug: 'package-managers-difference',
  },
  {
    title: '📈 Measure Performance in Next.js',
    desc: 'Use Lighthouse, Web Vitals, and custom metrics to analyze load speed.',
    date: 'March 20, 2025',
    slug: 'performance-in-nextjs',
  },
  {
    title: '⚙️ API Routes in Next.js 14',
    desc: 'How to build fast serverless APIs right inside your Next.js app.',
    date: 'March 15, 2025',
    slug: 'nextjs-api-routes',
  },
  {
    title: '🔒 Auth Strategies for SaaS Apps',
    desc: 'JWT, OAuth, sessions, magic links — what’s best in 2025?',
    date: 'March 10, 2025',
    slug: 'auth-strategies-2025',
  },
  {
    title: '🔐 Securing Your Frontend Code',
    desc: 'Don’t leak secrets, expose tokens, or let hackers in the door.',
    date: 'March 5, 2025',
    slug: 'frontend-security',
  },
  {
    title: '📂 Code Splitting and Lazy Loading',
    desc: 'Load only what you need, when you need it.',
    date: 'March 1, 2025',
    slug: 'lazy-loading-nextjs',
  },
  {
    title: '💡 10 VS Code Extensions to Supercharge You',
    desc: 'Themes, linting, AI, and terminal productivity tools for VS Code.',
    date: 'Feb 25, 2025',
    slug: 'vs-code-extensions',
  },
  {
    title: '📤 How to Build a Blog in Next.js',
    desc: 'From file structure to deployment, learn to build a full blog.',
    date: 'Feb 20, 2025',
    slug: 'nextjs-blog-tutorial',
  },
  {
    title: '🎯 How to Write Clean Code',
    desc: 'Naming, structure, readability — clean code is readable code.',
    date: 'Feb 15, 2025',
    slug: 'clean-code-tips',
  },
  {
    title: '🗃️ Managing Assets in React Projects',
    desc: 'SVGs, images, fonts — best practices for maintainable assets.',
    date: 'Feb 10, 2025',
    slug: 'assets-in-react',
  },
  {
    title: '🧱 CSS Frameworks in 2025',
    desc: 'Tailwind vs Bootstrap vs Vanilla — what works best now?',
    date: 'Feb 5, 2025',
    slug: 'css-frameworks-2025',
  },
  {
    title: '🛠️ Best Tools for Frontend Devs in 2025',
    desc: 'AI, CLI tools, Chrome extensions — level up your workflow.',
    date: 'Feb 1, 2025',
    slug: 'frontend-tools-2025',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen px-6 py-16 font-sans">
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-center text-[#f97316] mb-10 drop-shadow-[0_1px_10px_rgba(255,115,0,0.7)]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📝 Bugs and Beyond Blog
      </motion.h1>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <motion.div
            key={blog.slug}
            className="bg-[#111] border border-[#222] p-6 rounded-xl hover:border-[#22c55e] hover:shadow-[0_0_20px_#22c55eaa] transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold text-[#f97316] mb-2">{blog.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{blog.desc}</p>
            <div className="text-gray-500 text-xs mb-4">{blog.date}</div>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-[#22c55e] hover:underline text-sm"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
