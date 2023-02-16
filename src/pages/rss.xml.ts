import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@siteConfig";

export async function get() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    stylesheet: '/rss/styles.xsl',
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(({ data, slug }) => ({
      link: `posts/${slug}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.date),
    })),
  });
}
