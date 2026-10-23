import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

const routes = ["", "services/", "quote/", "tracking/", "about/", "contact/", "terms/", "privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${site.url}/${r}`, changeFrequency: "monthly", priority: r ? 0.7 : 1 }));
}
