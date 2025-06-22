import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="grid">
      <Link href="/">
        <h1>NEXT.js</h1>
      </Link>
      <nav>
        <Link href="/showcase">Showcase</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/enterprise">Enterprise</Link>
      </nav>
    </header>
  );
}
