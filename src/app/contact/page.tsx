import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Contato",
    description: "Entre em contato com Theryston",
    openGraph: {
      title: "Contato",
      description: "Entre em contato com Theryston",
      images: [
        signOgImageUrl({
          title: "Theryston",
          label: "Contato",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

export default function Page() {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-0 p-0 text-center">Contato</h1>
        <p className="text-sm opacity-50 text-center">
          Email:{" "}
          <Link href="mailto:devtheryston@gmail.com">
            devtheryston@gmail.com
          </Link>
        </p>
        <p className="text-sm opacity-50 text-center">
          GitHub:{" "}
          <Link
            href="https://github.com/theryston"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/theryston
          </Link>
        </p>
        <p className="text-sm opacity-50 text-center">
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/justtheryston/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/justtheryston/
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}
