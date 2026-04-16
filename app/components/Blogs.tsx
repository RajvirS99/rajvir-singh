import Link from "next/link";

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
        <div key={post.slug} className="flex justify-between">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:underline cursor-pointer"
          >
            {post.title}
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
