import BlogClient from "./BlogClient";
import Link from "next/link";

async function getBlog(slug) {
  const res = await fetch(
    `https://ca-service.onrender.com/api/blogs/${slug}`,
    {
      cache: "no-store", // Agar aap chahte ho ki SEO refresh ho toh isko isse hi rkho
    }
  );

  if (!res.ok) {
    return null;
  }
  return res.json();
}

// 👑 GENERATE METADATA FIXED HERE
export async function generateMetadata({ params }) {
  // Params ko await karna zaroori hai!
  const { slug } = await params; 
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Fintax Adviser",
      description: "The requested blog could not be found.",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt || "Read our latest blog post on Fintax Adviser.", // Fallback if excerpt missing

    alternates: {
      canonical: `https://fintaxadviser.com/blogs/${blog.slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://fintaxadviser.com/blogs/${blog.slug}`,
      type: "article",
      images: blog.image
        ? [
            {
              url: blog.image,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: blog.image ? [blog.image] : [],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center border border-slate-200">
          <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-4xl mb-6">
            📄
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Blog Not Found
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8">
            Sorry, the blog you are looking for doesn't exist, may have been
            removed, or the URL is incorrect.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/blogs"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              ← Back to Blogs
            </Link>

            <Link
              href="/"
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <BlogClient blog={blog} />;
}