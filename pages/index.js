import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header>
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a className="text-3xl text-orange-600 no-underline">{title}</a>
              </Link>
            </h3>
            <span className="mb-4 text-xs">{date}</span>
          </header>
          <section>
            <p className="mb-8">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files
    .map((filename) => {
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

      const { data } = matter(markdownWithMetadata);

      // Convert post date to format: Month day, Year
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = data.date.toLocaleDateString("en-US", options);

      const frontmatter = {
        ...data,
        date: formattedDate,
      };

      return {
        slug: filename.replace(".md", ""),
        frontmatter,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return {
    props: {
      posts,
    },
  };
}
