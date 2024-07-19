import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# Sobre Mim

Olá! Eu sou Theryston, programador desde 2016. Comecei a programar aos 11 anos e desde então não parei mais. Para mim, programação não é apenas uma profissão, mas uma paixão e um estilo de vida.

Este site é dedicado à programação, onde compartilho minhas experiências, projetos, e conhecimentos adquiridos ao longo dos anos. Desde a criação de aplicações em Rust até a implementação de soluções em AWS Lambda, este é o espaço onde divido um pouco do meu mundo com você.

Além de programar, gosto de assistir filmes, explorar novas tecnologias, e contribuir para projetos open-source. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer.

Seja você um programador iniciante ou um desenvolvedor experiente, espero que este site possa ser uma fonte de inspiração e conhecimento para você. Vamos juntos explorar o fascinante mundo da programação!

Abraços,

Theryston`;

export async function generateMetadata() {
  return {
    title: "Sobre Mim",
    description: "Saiba mais sobre Theryston e sua paixão por programação",
    openGraph: {
      title: "Sobre Mim",
      description: "Saiba mais sobre Theryston e sua paixão por programação",
      images: [
        signOgImageUrl({
          title: "Theryston",
          label: "Sobre Mim",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
