'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProjects = [
   
  { title: 'Codenest', desc: 'Crafting powerful, custom software solutions', link: 'https://codenest-technologies-9ve7.vercel.app/' },
  { title: 'Medi-Zone', desc: 'Healthcare solutions for modern lives..', link: 'https://madical-nrfm-kv3n8mq15-sk-technology801s-projects.vercel.app/' },
  { title: 'The Code of Talha', desc: 'Innovative developer crafting digital experiences.', link: 'https://thecodeoftalha.vercel.app/' },
];

const ongoingProjects = [
  { title: 'StockMaster POS', desc: 'Real-time inventory and sales tracking.' },
  { title: 'Hospital Dashboard', desc: 'Admin panel to manage patient appointments.' },
  { title: 'Blog CMS System', desc: 'Write, edit, and publish blogs from UI.' },
];

const completedProjects = [
  { title: 'E-Commerce Store', desc: 'Modern product shopping with cart and checkout.' },
  { title: 'Fitness Tracker', desc: 'Monitor health, food, and workouts.' },
  { title: 'Chat App', desc: 'Real-time messaging system using socket.io.' },
];

const categories = ['AI Projects', 'Web Apps', 'Dashboards', 'E-Commerce', 'Portfolio Sites', 'CMS Platforms'];
const technologies = ['Next.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Node.js', 'Express.js', 'JWT'];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen py-20 px-6">
      {/* 🚀 Featured Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-[#f97316] mb-12"
        >
          🚀 Featured Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-[#222] p-6 rounded-xl hover:shadow-[0_0_20px_#f97316aa] transition"
            >
              <h3 className="text-xl text-[#22c55e] font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400">{proj.desc}</p>
              <Link
                href={proj.link}
                target="_blank"
                className="inline-block mt-4 text-sm text-[#f97316] underline"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📂 Categories */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-8 text-center"
        >
          📂 Project Categories
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="bg-[#111] border border-[#333] px-4 py-2 rounded-full text-sm text-[#f97316] hover:bg-[#f97316] hover:text-black transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* 🛠 Technologies */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-8 text-center"
        >
          🛠 Technologies Used
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-[#1a1a1a] border border-[#444] px-4 py-2 rounded-lg text-sm hover:border-[#22c55e] hover:text-[#22c55e] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 📌 Ongoing Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#f97316] mb-10 text-center"
        >
          📌 Ongoing Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ongoingProjects.map((proj, i) => (
            <div key={i} className="bg-[#111] border border-[#333] p-6 rounded-xl">
              <h4 className="text-xl text-[#22c55e] font-semibold mb-2">{proj.title}</h4>
              <p className="text-gray-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Completed Projects */}
      <section className="max-w-6xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-10 text-center"
        >
          ✅ Completed Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {completedProjects.map((proj, i) => (
            <div key={i} className="bg-[#111] border border-[#333] p-6 rounded-xl">
              <h4 className="text-xl text-[#f97316] font-semibold mb-2">{proj.title}</h4>
              <p className="text-gray-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
