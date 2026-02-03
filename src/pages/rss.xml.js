import rss from "@astrojs/rss";
import { site } from "../siteData";
import { getCollection } from "astro:content";
import { getExcerptText, isPublished, sortByDateDesc, stripDatePrefix } from "../utils/content";

export async function GET(context) {
  const posts = (await getCollection("posts", isPublished)).sort(sortByDateDesc);

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? post.data.summary ?? getExcerptText(post.body),
      link: `/blog/${stripDatePrefix(post.slug)}/`,
    })),
  });
}
