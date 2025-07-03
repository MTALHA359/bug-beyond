'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadBlog() {
  const [form, setForm] = useState({ title: '', desc: '', content: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/blogs', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      setForm({ title: '', desc: '', content: '' });
      router.push('/blogs');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold text-center mb-6">📝 Upload New Blog</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="p-2 rounded border border-gray-600 bg-black text-white"
          required
        />
        <input
          placeholder="Short Description"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="p-2 rounded border border-gray-600 bg-black text-white"
          required
        />
        <textarea
          placeholder="Full Blog Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="p-2 h-40 rounded border border-gray-600 bg-black text-white"
          required
        />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          Submit Blog
        </button>
      </form>
    </div>
  );
}
