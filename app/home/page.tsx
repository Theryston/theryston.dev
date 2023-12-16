"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_BLOG_URL);
    window.location.href = process.env.NEXT_PUBLIC_BLOG_URL as string;
  }, []);

  return <></>;
}
