import type { MetadataRoute } from "next";
import { categories } from "@/content/products";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "products/", ...categories.map((c) => `products/${c.slug}/`), "about/", "contact/"];
  return routes.map((r) => ({ url: `${site.url}/${r}`, changeFrequency: "weekly", priority: r ? 0.7 : 1 }));
}
