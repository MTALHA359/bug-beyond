
'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogDetails = [
  {
    slug: 'debugging-like-a-pro',
    title: '🧠 Debugging Like a Pro',
    date: 'July 2, 2025',
    content: `Master modern debugging tools and mental models that save hours of stress. Learn breakpoints, conditional logging, and reproducible bug strategies.`,
  },
  {
    slug: 'common-js-mistakes',
    title: '💥 Top 10 JavaScript Mistakes to Avoid',
    date: 'June 29, 2025',
    content: `From type coercion to async/await misuse — here are the top mistakes developers make and how to avoid them.`,
  },
  {
    slug: 'nextjs-app-router-guide',
    title: '🔥 Next.js App Router Deep Dive',
    date: 'June 22, 2025',
    content: `Understand layouts, nested routes, loading UI, and server components in Next.js 14 App Router.`,
  },
  {
    slug: 'ai-tools-for-devs',
    title: '🤖 AI Tools for Bug Hunters',
    date: 'June 15, 2025',
    content: `Explore AI tools like GitHub Copilot, Cursor, and others that help developers debug and build faster.`,
  },
  {
    slug: 'productivity-dev-shortcuts',
    title: '🚀 Boost Productivity with Dev Shortcuts',
    date: 'June 10, 2025',
    content: `Boost speed with terminal shortcuts, VS Code extensions, and Git aliases that save hours daily.`,
  },
  {
    slug: 'css-tricks-2025',
    title: '🎨 CSS Tricks You Should Know in 2025',
    date: 'June 5, 2025',
    content: `Use container queries, subgrid, accent-color, and other CSS 2025 updates for cleaner layouts.`,
  },
  {
    slug: 'dark-mode-tips',
    title: '🌙 Dark Mode Implementation Tips',
    date: 'May 29, 2025',
    content: `Build clean dark mode toggles with Tailwind, prefers-color-scheme, and localStorage support.`,
  },
  {
    slug: 'react-performance-tips',
    title: '⚡ Optimizing React Performance',
    date: 'May 20, 2025',
    content: `Avoid unnecessary re-renders with memoization, lazy loading, and batching state updates.`,
  },
  {
    slug: 'git-tips',
    title: '🔧 10 Git Tips Every Developer Should Know',
    date: 'May 15, 2025',
    content: `From interactive rebase to bisect, these Git commands can change your workflow forever.`,
  },
  {
    slug: 'npm-scripts-guide',
    title: '📦 NPM Scripts Mastery',
    date: 'May 10, 2025',
    content: `Learn to write custom NPM scripts to automate builds, tests, and deploys.`,
  },
  {
    slug: 'unit-testing-guide',
    title: '🧪 Unit Testing Simplified',
    date: 'May 5, 2025',
    content: `Confidently write and organize unit tests with Vitest, Jest, and testing best practices.`,
  },
  {
    slug: 'responsive-design',
    title: '📐 Responsive Design Principles',
    date: 'May 1, 2025',
    content: `Mobile-first design, fluid layouts, breakpoints, and responsive image techniques.`,
  },
  {
    slug: 'seo-for-developers',
    title: '🌐 SEO for Developers',
    date: 'April 25, 2025',
    content: `Essential SEO techniques — meta tags, sitemaps, semantic HTML — for devs who want rankings.`,
  },
  {
    slug: 'folder-structure-patterns',
    title: '📁 Folder Structure for Large Projects',
    date: 'April 20, 2025',
    content: `Keep code scalable and readable with domain-based, feature-based, or atomic folder structures.`,
  },
  {
    slug: 'react-charts',
    title: '📊 Building Charts in React',
    date: 'April 15, 2025',
    content: `Use Recharts or Chart.js to render line charts, bar graphs, and custom data visualizations.`,
  },
  {
    slug: 'vercel-vs-netlify',
    title: '🌍 Deploying on Vercel vs Netlify',
    date: 'April 10, 2025',
    content: `Speed, features, CI/CD, edge functions — compare Vercel and Netlify for deploying Next.js.`,
  },
  {
    slug: 'context-vs-redux',
    title: '🧵 UseContext vs Redux in 2025',
    date: 'April 5, 2025',
    content: `Use simple context for lightweight needs; switch to Redux Toolkit for large-scale global state.`,
  },
  {
    slug: 'fast-dev-setup',
    title: '💻 Setup a Fast Dev Environment',
    date: 'March 30, 2025',
    content: `From terminal tools to editor plugins, this guide helps you build a blazing-fast dev setup.`,
  },
  {
    slug: 'package-managers-difference',
    title: '📦 Understanding Package Managers',
    date: 'March 25, 2025',
    content: `npm vs yarn vs pnpm — when to use which and how they differ in performance and lockfile behavior.`,
  },
  {
    slug: 'performance-in-nextjs',
    title: '📈 Measure Performance in Next.js',
    date: 'March 20, 2025',
    content: `Use Lighthouse, Web Vitals, and Next.js built-in analyzer to track performance.`,
  },
  {
    slug: 'nextjs-api-routes',
    title: '⚙️ API Routes in Next.js 14',
    date: 'March 15, 2025',
    content: `Learn to build serverless functions inside Next.js — handle POST, GET, and database actions.`,
  },
  {
    slug: 'auth-strategies-2025',
    title: '🔒 Auth Strategies for SaaS Apps',
    date: 'March 10, 2025',
    content: `Compare JWT, sessions, OAuth2, magic links, and social login for SaaS platforms.`,
  },
  {
    slug: 'frontend-security',
    title: '🔐 Securing Your Frontend Code',
    date: 'March 5, 2025',
    content: `Avoid leaking API keys, use CSP headers, and keep code tamper-proof.`,
  },
  {
    slug: 'lazy-loading-nextjs',
    title: '📂 Code Splitting and Lazy Loading',
    date: 'March 1, 2025',
    content: `Reduce bundle size using dynamic import, React.lazy, and Next.js code splitting.`,
  },
  {
    slug: 'vs-code-extensions',
    title: '💡 10 VS Code Extensions to Supercharge You',
    date: 'Feb 25, 2025',
    content: `Top VS Code extensions for productivity, themes, GitHub Copilot, and debugging.`,
  },
  {
    slug: 'nextjs-blog-tutorial',
    title: '📤 How to Build a Blog in Next.js',
    date: 'Feb 20, 2025',
    content: `Start from scratch — create routes, fetch markdown content, and deploy your Next.js blog.`,
  },
  {
    slug: 'clean-code-tips',
    title: '🎯 How to Write Clean Code',
    date: 'Feb 15, 2025',
    content: `Make your code readable, maintainable, and reusable with naming, formatting, and principles.`,
  },
  {
    slug: 'assets-in-react',
    title: '🗃️ Managing Assets in React Projects',
    date: 'Feb 10, 2025',
    content: `Images, SVGs, fonts — best ways to store and access assets in React and Next.js.`,
  },
  {
    slug: 'css-frameworks-2025',
    title: '🧱 CSS Frameworks in 2025',
    date: 'Feb 5, 2025',
    content: `Tailwind, Bootstrap, and native CSS — which framework fits your project in 2025?`,
  },
  {
    slug: 'frontend-tools-2025',
    title: '🛠️ Best Tools for Frontend Devs in 2025',
    date: 'Feb 1, 2025',
    content: `A curated list of frontend dev tools — AI, browser extensions, CLI tools, and libraries.`,
  },
];

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = blogDetails.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen px-6 py-16 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-[#f97316] mb-4">{blog.title}</h1>
        <p className="text-gray-400 text-sm mb-8">{blog.date}</p>
        <div className="text-lg whitespace-pre-line leading-7">{blog.content}</div>
        <div className="mt-10">
          <Link href="/blogs" className="text-[#22c55e] hover:underline text-sm">
            ← Back to Blog List
          </Link>
        </div>
      </div>
    </main>
  );
}
