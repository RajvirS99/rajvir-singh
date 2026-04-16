import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Header from "../components/Header";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-2xl mx-auto py-10 flex flex-col gap-10 px-4">
      <Header />
      <div>
        <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          ← Back
        </Link>
        <h1 className="text-2xl font-bold mt-4">Blog</h1>
      </div>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-1">
            <div className="flex justify-between items-baseline gap-4">
              <p className="font-medium group-hover:underline">{post.title}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 shrink-0">
                {new Date(post.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
