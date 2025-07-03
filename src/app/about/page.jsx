'use client';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Users, FileDown, Star } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-[#0b0b0b] text-white font-sans px-6 py-24">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-[#22c55e] drop-shadow-[0_1px_10px_#22c55e]"
        >
          👨‍💻 About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4"
        >
          I'm a full-stack developer passionate about creating sleek, scalable, and impactful digital products. Let’s turn ideas into reality.
        </motion.p>
        <Link
          href="/cv.pdf"
          target="_blank"
          className="mt-6 inline-block bg-gradient-to-r from-[#f97316] to-[#22c55e] text-black font-semibold px-6 py-2 rounded shadow hover:scale-105 transition"
        >
          <FileDown size={16} className="inline-block mr-2" /> Download Resume
        </Link>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-28">
        {skills.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#111] border border-[#222] p-6 rounded-xl text-center hover:border-[#22c55e] hover:shadow-[0_0_20px_#22c55e80] transition"
          >
            <item.icon size={36} className="mx-auto text-[#f97316] mb-4" />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Experience Timeline */}
      <section className="max-w-5xl mx-auto mb-24">
        <h2 className="text-3xl font-bold text-center text-[#f97316] mb-12">🚀 My Journey</h2>
        <div className="space-y-10 border-l-4 border-[#333] pl-6">
          {timeline.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-2 w-4 h-4 bg-[#22c55e] rounded-full shadow-[0_0_10px_#22c55e]" />
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-sm text-[#aaa]">{exp.company} • {exp.duration}</p>
              <p className="text-sm text-gray-500 mt-1">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="text-center mb-28 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#22c55e] mb-10">🧠 Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-[#333] px-5 py-2 rounded-lg text-sm hover:shadow-[0_0_10px_#22c55e88] text-white"
            >
              {tech.name}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#111] py-20 rounded-lg max-w-6xl mx-auto mb-28 px-6">
        <h2 className="text-3xl font-bold text-center text-[#f97316] mb-12">🌟 Testimonials</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 rounded-xl shadow hover:shadow-[0_0_15px_#f97316aa] transition"
            >
              <p className="text-sm text-gray-400 italic mb-3">"{t.quote}"</p>
              <div className="flex items-center gap-3 text-sm text-white">
                <Star className="text-[#22c55e]" size={16} />
                <strong>{t.name}</strong> – <span className="text-gray-500">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-[#22c55e] to-[#f97316] text-black rounded-xl max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold"
        >
          💬 Ready to Collaborate?
        </motion.h3>
        <p className="text-md mt-2">Let’s create something impactful together.</p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-md hover:scale-105 transition"
        >
          Contact Me
        </Link>
      </section>
    </main>
  );
}

// Skills
const skills = [
  {
    title: 'Frontend Wizardry',
    icon: Code2,
    desc: 'React, Next.js, TailwindCSS — smooth and responsive interfaces.',
  },
  {
    title: 'Backend Mastery',
    icon: Users,
    desc: 'Node.js, Express, MongoDB, secure APIs, and scalable logic.',
  },
  {
    title: 'Creative Developer',
    icon: Sparkles,
    desc: 'Crafting elegant experiences with motion, visuals & UI design.',
  },
];

// Timeline
const timeline = [
  {
    role: 'Frontend Engineer',
    company: 'Freelance',
    duration: '2023 - Present',
    desc: 'Created stunning UIs and landing pages for SaaS products.',
  },
  {
    role: 'MERN Stack Intern',
    company: 'TechGenix',
    duration: '2022 - 2023',
    desc: 'Worked on dashboards, authentication flows, and APIs.',
  },
];

// Tech Stack
const techs = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'Tailwind CSS' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'Framer Motion' },
  { name: 'Express.js' },
];

// Testimonials
const testimonials = [
  {
    quote: 'A reliable and creative developer with excellent problem-solving skills.',
    name: 'John Doe',
    role: 'CTO, SoftNova',
  },
  {
    quote: 'Helped us launch a production-grade dashboard in record time.',
    name: 'Sara Khan',
    role: 'PM, CodeCraft',
  },
];
