import matter from "gray-matter";
import fs from "fs";
import path from "path";

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getSortedPosts() {
  // Get all posts located in `content/posts`
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files
    .map((filename) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${filename}`)
        .toString();

      // Parse markdown and get frontmatter data.
      const { data } = matter(markdownWithMetadata);

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
      };
    })
    .sort(
      (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
    );

  return posts;
}

export function getPostsSlugs() {
  const files = fs.readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPostBySlug(slug) {
  // Get raw content for post given a slug
  const markdownWithMetadata = fs
    .readFileSync(path.join("content/posts", slug + ".md"))
    .toString();

  // Parse markdown, and get markdown's frontmatter and content.
  const { data, content, excerpt } = matter(markdownWithMetadata);

  const frontmatter = {
    ...data,
    date: getFormattedDate(data.date),
  };

  return { frontmatter, post: { content, excerpt } };
}
