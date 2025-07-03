import Link from 'next/link';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data.blogs || [];
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-orange-500 mb-8">📰 All Blogs</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-[#111] p-6 border border-[#222] rounded-lg">
            <h2 className="text-xl text-green-400 font-bold">{blog.title}</h2>
            <p className="text-gray-400">{blog.desc}</p>
            <Link href={`/blogs/${blog._id}`} className="text-orange-500 text-sm underline mt-2 inline-block">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
