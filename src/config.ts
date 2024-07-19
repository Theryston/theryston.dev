const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");

  const name = "Theryston";
  const displayName = `${name}.`;

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name: displayName,
      copyright: name,
      metadata: {
        title: {
          absolute: name,
          default: name,
          template: `%s - ${name}`,
        },
        description:
          "Blog sobre programação, com tutoriais, projetos e dicas para desenvolvedores de todos os níveis. Explore o mundo da tecnologia e aprenda novas habilidades",
      },
    },
    ogImageSecret: process.env.OG_IMAGE_SECRET,
    wisp: { blogId },
  };
};

export const config = buildConfig();
