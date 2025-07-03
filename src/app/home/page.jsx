
'use client';
import { Flame, Code2, BrainCircuit, Github, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-white font-sans">
      {/* Hero */}
      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-[#f97316] drop-shadow-[0_1px_10px_rgba(255,115,0,0.7)]"
        >
          Welcome to Bug-Beyond
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Where <span className="text-[#22c55e] font-bold">code</span>, <span className="text-[#22c55e] font-bold">tech</span>, and <span className="text-[#22c55e] font-bold">creativity</span> merge.
        </p>
        <Link href="/blogs">
          <button className="mt-10 px-6 py-3 bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black font-semibold rounded-lg shadow hover:scale-105 transition">
            Explore Blogs
          </button>
        </Link>
      </section>

      {/* Categories */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[#111] border border-[#222] p-6 rounded-xl hover:border-[#f97316] hover:shadow-[0_0_20px_#f97316aa] transition"
          >
            <div className="flex items-center mb-4 text-[#f97316]">
              <cat.icon size={28} className="mr-2" />
              <h3 className="text-xl font-bold">{cat.title}</h3>
            </div>
            <p className="text-gray-400">{cat.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Latest Blogs */}
      <section className="bg-[#111] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#22c55e] mb-12">📰 Latest Blogs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {latestBlogs.map((blog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-[#1a1a1a] border border-[#2c2c2c] p-5 rounded-xl hover:shadow-[0_0_20px_#22c55e70] transition"
              >
                <h3 className="text-xl text-[#f97316] font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm">{blog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#f97316] mb-12">🎯 Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-[#222] p-6 rounded-lg hover:shadow-[0_0_20px_#f97316aa] transition"
            >
              <h3 className="text-xl text-[#22c55e] font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400">{proj.desc}</p>
              <Link href={proj.link} className="text-[#f97316] underline text-sm mt-3 inline-block" target="_blank">
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-[#22c55e] to-[#f97316] py-16 text-black text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold"
        >
          📬 Subscribe for Weekly Bug-Beyond Tips
        </motion.h2>
        <p className="mt-3 text-lg">Join 500+ developers learning smart & fast</p>
        <form className="mt-6 flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-gray-800"
          >
            <Send size={18} /> Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0b0b] text-gray-400 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Bug-Beyond – All rights reserved</p>
        <div className="mt-3 flex justify-center gap-6 text-white">
          <Link href="https://github.com/sk-technology801" target="_blank"><Github size={22} /></Link>
          <Link href="https://www.linkedin.com/in/sk-technology-05080b338/" target="_blank"><Linkedin size={22} /></Link>
        </div>
      </footer>
    </main>
  );
}

// Categories
const categories = [
  {
    title: 'JavaScript & Frameworks',
    icon: Code2,
    description: 'Deep dives, tips, and tricks on JavaScript, React, Next.js, and more.',
  },
  {
    title: 'AI & Tools',
    icon: BrainCircuit,
    description: 'Explore AI trends, tools, and how to use them for developer productivity.',
  },
  {
    title: 'Dev Guides',
    icon: Flame,
    description: 'Step-by-step tutorials, project walkthroughs, and best practices.',
  },
];

// Latest Blogs
const latestBlogs = [
  { title: 'Mastering React Hooks', desc: 'A complete breakdown of useEffect, useState, and more.' },
  { title: 'Next.js 14 App Router Guide', desc: 'Learn how to leverage App Router in production apps.' },
  { title: 'Integrating GPT into your App', desc: 'Quick setup for GPT-4 APIs with your frontend.' },
];

// Real Projects with Links
const projects = [
  {
    title: 'Codenest',
    desc: 'Crafting powerful, custom software solutions',
    link: 'https://codenest-technologies-9ve7.vercel.app/',
  },
  {
    title: 'Medi-Zone',
    desc: 'Healthcare solutions for modern lives.',
    link: 'https://madical-nrfm-kv3n8mq15-sk-technology801s-projects.vercel.app/',
  },
  {
    title: 'The Code of Talha',
    desc: 'Innovative developer crafting digital experiences.',
    link: 'https://thecodeoftalha.vercel.app/',
  },
 
];
