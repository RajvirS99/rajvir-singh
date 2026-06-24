import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "my-first-experience-with-react-flow",
    title: "My first experience with React Flow",
    date: "12 April 2025",
  },
  {
    slug: "graphql-for-beginners",
    title: "GraphQL for beginners",
    date: "13 September 2025",
  },
];

function Blogs() {
  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="flex justify-between slide-on-hover"
        >
          <div className="flex items-center gap-2">
            <ArrowRight strokeWidth={2} size={20} stroke="#3B82F6" />
            <Link
              href={`/blog/${post.slug}`}
              className="hover:underline cursor-pointer"
            >
              {post.title}
            </Link>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
