import type { MetadataRoute } from "next";
import urlJoin from "url-join";
import { config } from "@/config";
import { wisp } from "@/lib/wisp";

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const result = await wisp.getTags();
  return [
    {
      url: urlJoin(config.baseUrl, "tag"),
      lastModified: new Date(),
      priority: 0.8,
    },
    ...result.tags.map((tag) => {
      return {
        url: urlJoin(config.baseUrl, "tag", tag.name),
        lastModified: new Date(),
        priority: 0.8,
      };
    }),
  ];
}
