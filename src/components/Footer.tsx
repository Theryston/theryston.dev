"use client";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { config } from "@/config";
import Link from "next/link";

export const Footer: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      <div className="text-sm text-muted-foreground">
        © {config.blog.copyright} {new Date().getFullYear()}
      </div>
      <div className="flex gap-2 items-center">
        <Link
          href="/terms-and-privacy"
          className="text-sm text-muted-foreground"
        >
          Termos e Privacidade
        </Link>
        <DarkModeToggle />
      </div>
    </section>
  );
};
