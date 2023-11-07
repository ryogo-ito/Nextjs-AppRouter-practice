import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js",
};

export default function Page() {
  return <Link href="/blog">blog</Link>;
}
