import { config } from "@/config";
import type { MetadataRoute } from "next";
import urlJoin from "url-join";

const staticPaths = ["about", "contact"];

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = staticPaths.map((path) => ({
    url: urlJoin(config.baseUrl, path),
    lastModified: new Date(),
    priority: 0.9,
  }));
  return paths;
}
