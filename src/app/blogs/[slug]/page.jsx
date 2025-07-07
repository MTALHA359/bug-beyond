
'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const blogDetails = [
  {
    slug: 'debugging-like-a-pro',
    title: '🧠 Debugging Like a Pro',
    date: 'July 2, 2025',
    content: `"Debugging Like a Pro" means going beyond just finding and fixing bugs — it's about understanding your code, using the right tools, and developing a strategic mindset. Here's a practical guide to help you debug like a professional:

🧠 1. Reproduce the Bug Consistently
First, make sure you can reproduce the issue every time.

Document the exact steps or input that cause it.

If it's inconsistent, look for patterns — OS, browser, environment, time, etc.

🔍 2. Read the Error Message Carefully
Don’t skim error messages — read them line by line.

Check:

File name and line number

Stack trace

Message content (e.g., undefined is not a function)

🧰 3. Use the Right Tools
Console.log() wisely — print variables, types, and flows.

Use debuggers (like Chrome DevTools, VSCode Debugger).

Breakpoints > print statements for stepping through code.

Use try/catch for suspicious sections in JS or TS.

🧩 4. Isolate the Problem
Simplify and reduce your code to the minimal case that breaks.

Comment out unrelated code to narrow the scope.

Check if the bug still appears in a fresh/new project (helps find framework/library issues).

🔄 5. Roll Back to the Last Working State
Use Git to go back and test previous commits.

Use git bisect to find the exact commit that introduced the bug.

🤖 6. Use Linters & Type Checkers
ESLint, TypeScript, Prettier, etc. catch errors before runtime.

Static analysis tools are your first line of defense.

👨‍🔬 7. Think Like the Compiler/Interpreter
What exactly is the computer doing at each line?

Are you making assumptions about variables, data types, or timing?

🧠 8. Ask “What Changed?”
A working system breaks. Why?

Recent deploy? Package upgrade? New environment?

💬 9. Rubber Duck Debugging
Explain the code (even to a rubber duck 🦆).

Verbalizing your logic often reveals the problem.

🧑‍💻 10. Log Smartly
Add meaningful logs: variable states, execution flow, errors.

Prefix logs with function names or tags.

Clean up logs after the bug is fixed.

🛠️ 11. Use Error Monitoring Tools
Tools like Sentry, LogRocket, Datadog, or Firebase Crashlytics help catch and track bugs in production.

Set up alerts for high-priority crashes.

✅ 12. Write Tests After Fixing
Write unit tests and integration tests to make sure the bug doesn’t return.

Add regression tests for tricky bugs.

🚫 13. Don’t Guess – Test!
Avoid “maybe this will fix it” coding.

Hypothesize → Test → Prove → Fix

📘 Pro Debugging Mindset
Stay calm and curious, not frustrated.

Bugs are learning opportunities.

Experienced devs don’t avoid bugs — they solve them faster because of practice and strategy.
`,
  },
  {
    slug: 'common-js-mistakes',
    title: '💥 Top 10 JavaScript Mistakes to Avoid',
    date: 'June 29, 2025',
    content: `🔟 1. Using var Instead of let or const
The var keyword is function-scoped and can be hoisted to the top of its scope, which often leads to unpredictable behavior or bugs.
Instead, use let for variables that will change and const for values that should not change.

9️⃣ Using == Instead of ===
Using double equals (==) performs type coercion, which can lead to confusing or incorrect comparisons.
Always use strict equality (===) to ensure both value and type are the same.

8️⃣ Mixing async/await with .then()
Combining different asynchronous styles (like await with .then()) makes code harder to read and maintain.
Stick with one style — preferably async/await — for clarity and consistency.

7️⃣ Not Handling Errors in Async Code
Forgetting to wrap await calls in try...catch blocks can cause silent failures or unhandled promise rejections.
Always handle errors properly in asynchronous code to prevent your app from crashing or behaving unexpectedly.

6️⃣ Unintentionally Mutating Objects or Arrays
When you directly modify an object or array, you may unknowingly affect the original reference elsewhere in your code.
Always create a copy (clone) of the object or array before making changes to avoid side effects.

5️⃣ Misusing this
The this keyword behaves differently depending on how and where a function is called.
If you’re not careful, you can lose context, especially inside event listeners or callbacks.
Use arrow functions or bind(this) to maintain the correct context.

4️⃣ Incorrect Type Checking
The typeof operator has limitations — for example, typeof null returns "object" and arrays also return "object".
Use more accurate checks like Array.isArray() to identify data types reliably.

3️⃣ Using Math.random() for Security
Math.random() is not cryptographically secure and should never be used for generating passwords, tokens, or security-related values.
Use the built-in Web Crypto API or other secure methods when security is important.

2️⃣ Forgetting return in Functions
If you forget to include a return statement in a function, it will return undefined by default.
Always check whether your function is expected to return a value — and make sure it does.

💥 1️⃣ Not Understanding the JavaScript Event Loop
Assuming JavaScript runs everything in order (synchronously) can lead to confusing bugs.
JavaScript uses an event loop to handle asynchronous tasks like setTimeout, Promises, and events.
Understanding how the event loop works helps you write better, non-blocking code.`,
  },
  {
    slug: 'nextjs-app-router-guide',
    title: '🔥 Next.js App Router Deep Dive',
    date: 'June 22, 2025',
    content: `Absolutely! Here's a clear and structured ✨ 🔥 Next.js App Router Deep Dive — perfect for understanding the core concepts, best practices, and real-world tips for using the App Router in Next.js 13+ (with the /app directory):

🔥 Next.js App Router Deep Dive (as of Next.js 13+)
🚀 1. What is the App Router?
The App Router is a new file-based routing system introduced in Next.js 13+ using the /app directory (replacing /pages). It enables React Server Components, layouts, loading UI, streaming, and enhanced routing features.

🧱 2. File Structure Overview

/app
  ├── layout.jsx        # Required for all routes - wraps every page
  ├── page.jsx          # Route handler (like pages/index.js)
  ├── loading.jsx       # Optional loading state (suspense fallback)
  ├── error.jsx         # Optional error boundary for the route
  └── dashboard/
        └── page.jsx    # Nested route: /dashboard
✅ Each folder becomes a route.
✅ Every route must include a page.jsx and can include layout.jsx.

🧭 3. Routing Features
Server Components (default): Most components run on the server, reducing bundle size.

Client Components: Use 'use client' directive at the top.

Dynamic Routes: Defined as [slug] or [id].

Catch-all Routes: Use [...slug].

Parallel Routes: Use @folder syntax.

Interception Routes: Use (.), (..), etc.

🔄 4. Layouts & Nested Layouts
Layouts wrap pages and persist across navigations.

You can nest layouts inside subfolders (/app/dashboard/layout.jsx).

🔁 This avoids remounting shared components like sidebars and navbars.

⚡ 5. Loading & Error States
loading.jsx: Shows UI while page or data is loading (Suspense).

error.jsx: Acts as an error boundary for a route.

Both are optional but highly recommended for UX.

🔍 6. Client vs Server Components
Default: Everything is a Server Component.

To use hooks, useState, useEffect, or event listeners — add 'use client' at the top.
'use client';

import { useState } from 'react';
📦 7. Shared UI with Slots & Layouts
App Router allows you to share UI across routes more cleanly with layouts and named slots.

Use children or modal slots in layouts for deeply composed UIs.

💬 8. API Routes → Now in /app/api
Still supported via traditional /pages/api folder.

Or use Route Handlers inside /app/api/route.js.
Example:
/app/api/hello/route.js → GET /api/hello
💻 9. Deployment Notes
Works with Vercel out of the box.

Uses React 18 features: streaming, suspense, server components.

Make sure you're using Next.js 13+ and Node 18+ for best compatibility.

✅ 10. Best Practices
Use layout.jsx in every route folder to manage UI structure.

Keep reusable UI in components/ and mark as 'use client' if needed.

Separate business logic into server components when possible.

Use loading.jsx and error.jsx for smoother UX.

Prefer dynamic metadata for SEO in /app structure.

📚 Bonus: App Router vs Pages Router
Feature	App Router (/app)	Pages Router (/pages)
Server Components	✅ Yes	❌ No
File-based Routing	✅ Yes	✅ Yes
Layouts / Nested Layouts	✅ Yes	❌ Manual Only
Loading/Error Handling	✅ Built-in	❌ Custom
Streaming/Suspense	✅ Supported	❌ Not Supported.`,
  },
  {
    slug: 'ai-tools-for-devs',
    title: '🤖 AI Tools for Bug Hunters',
    date: 'June 15, 2025',
    content: `🤖 AI Tools for Bug Hunters
Your 2025 guide to smarter debugging with AI

🧠 1. GitHub Copilot
AI pair programmer by OpenAI

Suggests clean code in real-time

Catches bugs and suggests best practices

Works in VS Code, JetBrains, Neovim, etc.

Perfect for: Preventing logic and syntax errors as you type.

💬 2. Amazon CodeWhisperer
Free AI coding assistant from AWS

Understands context and generates secure code

Flags potential vulnerabilities

Integrates tightly with AWS ecosystem

Perfect for: Bug hunting in AWS-powered projects.

🛡️ 3. Snyk
AI + security for your code and dependencies

Scans for security issues in code, Docker, IaC

Fixes with one-click pull requests

CI/CD & GitHub integration

Perfect for: Fixing vulnerable packages automatically.

🧠 4. DeepCode (by Snyk)
AI-powered static code analysis

Understands code intent, not just syntax

Gives meaningful real-time IDE feedback

Works in JS, Python, Java, etc.

Perfect for: Intelligent bug detection with minimal false positives.

⚡ 5. Tabnine
AI autocomplete assistant

Trained on secure, high-quality code

Learns your patterns for faster dev speed

Lightweight and fast

Perfect for: Safer code completions and fast debugging.

🧪 6. Ponicode
AI-generated unit test coverage

Auto-generates meaningful test cases

Identifies missing edge cases

Works with JavaScript, Python, and more

Perfect for: Boosting test coverage with zero effort.

🧬 7. CodiumAI
Explain and test your code with AI

Suggests logic-based tests

Detects logical bugs before they hit production

GitHub + VS Code support

Perfect for: Writing testable, bulletproof logic.

🔁 8. Mutable.ai
Refactor and debug legacy code using AI

Refactors buggy code for clarity

Suggests improvements in real time

IDE plugin support

Perfect for: Cleaning up messy or error-prone code.

🔍 9. SonarQube + SonarLint
Static analysis for bugs, smells, and security

Realtime IDE linting (SonarLint)

Deep code inspection in CI (SonarQube)

Supports 20+ languages

Perfect for: Enterprise-grade bug prevention.

📽️ 10. OpenReplay + SessionStack
AI-powered frontend session replays

Replay user interactions

Identify UI bugs and crash patterns

Session replays + analytics + dev tools

Perfect for: Visualizing frontend bugs in production.

🎁 Bonus Mentions:
LogRocket AI – Detects frontend performance regressions

Sentry + AI – Smart error grouping + root cause analysis

AICommit – Explains bug fixes in auto-generated commit messages

Bito AI – Understands and refactors legacy systems

✅ Summary Table
Tool	Best For	IDE/Platform
Copilot	Real-time bug prevention	VS Code, JetBrains
Snyk	Vulnerability & code scanning	GitHub, CLI
CodiumAI	AI test generation & logic checks	GitHub, VS Code
SonarLint	Instant feedback while coding	VS Code, IntelliJ
OpenReplay	Visual debugging of user sessions	Web dashboard.`,
  },
  {
    slug: 'productivity-dev-shortcuts',
    title: ' Boost Productivity with Dev Shortcuts',
    date: 'June 10, 2025',
    content: `Save time. Code faster. Work smarter.

1. Universal Keyboard Shortcuts (Work in Most Code Editors)
These shortcuts help you navigate and edit code faster:

Duplicate line

Windows/Linux: Shift + Alt + Up or Down

macOS: Shift + Option + Up or Down

Move line up/down

Windows/Linux: Alt + Up or Down

macOS: Option + Up or Down

Multi-cursor editing

Windows/Linux: Ctrl + Click

macOS: Command + Click

Go to file quickly

Windows/Linux: Ctrl + P

macOS: Command + P

Go to a specific line

Windows/Linux: Ctrl + G

macOS: Command + G

Open command palette

Windows/Linux: Ctrl + Shift + P

macOS: Command + Shift + P

Toggle terminal

Windows/Linux: Ctrl + backtick

macOS: Command + backtick

2. VS Code Power Tips
Boost your speed using these built-in shortcuts:

Format code: Shift + Alt + F

Rename symbols: F2

Peek definition: Alt + F12

Go to definition: F12

Quick fix: Ctrl or Command + dot

Open or close sidebar: Ctrl + B

Zen Mode for focus: Ctrl + K then Z

3. Useful Terminal Shortcuts
Cancel command: Ctrl + C

Clear terminal: Ctrl + L

Go back to last folder: cd -

Repeat previous command: double exclamation marks

Switch to last Git branch: git checkout dash

Jump to start/end of line: Ctrl + A or Ctrl + E

4. Git Time-Saving Commands
Create new branch: git checkout -b branch-name

Save changes and switch: git stash and git checkout main

Edit last commit: git commit amend

Undo last commit (keep changes): git reset HEAD~1

Tip: Customize Git aliases (for example, gs = git status) in your Git config to type faster.

5. Recommended VS Code Extensions
Path Intellisense: autocomplete file paths

Prettier: auto-format code

GitLens: view Git history and author inline

Live Server: auto-reload HTML and JavaScript projects

ESLint: find and fix code issues automatically

6. Developer Habits That Boost Focus
Try Pomodoro: 25 minutes work, 5 minutes rest

Write down 3 important tasks daily

Keep a dev log for bugs and solutions

Use code snippets for repeated patterns

Final Thoughts
Master your tools and workflows.
You won’t just save time — you’ll code smarter, better, and faster.`},
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