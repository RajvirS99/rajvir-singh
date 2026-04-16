import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, PostMeta } from "@/lib/blog";
import Header from "@/app/components/Header";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mod = await import(`@/content/blog/${slug}.mdx`);
  const meta: PostMeta = mod.metadata;
  return { title: meta.title, description: meta.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let mod: { default: React.ComponentType; metadata: PostMeta };

  try {
    mod = await import(`@/content/blog/${slug}.mdx`);
  } catch {
    notFound();
  }

  const Post = mod!.default;
  const meta = mod!.metadata;

  return (
    <div className="max-w-2xl mx-auto py-10 flex flex-col gap-10 px-4">
      <Header />
      <div>
        <Link href="/blog" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
          ← All posts
        </Link>
        <h1 className="text-2xl font-bold mt-4">{meta.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {new Date(meta.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <Post />
      </article>
    </div>
  );
}
