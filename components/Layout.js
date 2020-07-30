import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1 className="mb-8">
      <Link href="/">
        <a className="font-black leading-none text-black no-underline text-7xl font-display">
          Next.Js Starter Blog
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-2">
      <Link href="/">
        <a className="text-2xl font-black text-black no-underline font-display">
          Next.Js Starter Blog
        </a>
      </Link>
    </h1>
  );

  return (
    <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
      <header>{header}</header>
      <main>{children}</main>
      <footer className="text-lg font-light">
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a>
        &#128293;
      </footer>
    </div>
  );
}
