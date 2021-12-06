import fs from "fs";

import { Feed } from "feed";

import { getSiteMetaData } from "./helpers";
import { getSortedPosts } from "./posts";

export function generateRssPostsFeed() {
  const { title, siteUrl, language, author } = getSiteMetaData();
  const posts = getSortedPosts();

  const feed = new Feed({
    title,
    id: siteUrl,
    link: siteUrl,
    language,
    copyright: "Copyright © " + new Date().getFullYear() + " " + author.name,
    author: {
      name: author.name,
      link: author?.link,
    },
    feedLinks: {
      rss2: `${siteUrl}rss.xml`,
    },
  });

  posts.forEach(
    ({ frontmatter: { title, description, date }, content, slug }) => {
      feed.addItem({
        title,
        description,
        date: new Date(date),
        id: slug,
        link: `${siteUrl}posts/${slug}`,
        content: content,
      });
    }
  );

  // Write the RSS output to a public file, making it
  // accessible at siteUrl/rss.xml
  fs.writeFileSync("public/rss.xml", feed.rss2());
}
