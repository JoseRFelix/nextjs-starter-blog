import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1 className="mb-8">
      <Link href="/">
        <a className="text-6xl font-black text-black no-underline">
          Next.Js Starter Blog
        </a>
      </Link>
    </h1>
  ) : (
    <h1 className="mb-2">
      <Link href="/">
        <a className="text-2xl font-black text-black no-underline">
          Next.Js Starter Blog
        </a>
      </Link>
    </h1>
  );

  return (
    <div className="max-w-screen-sm px-4 py-8 mx-auto">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{" "}
        <a href="https://nextjs.org/">Next.js</a> &#128293;
      </footer>
    </div>
  );
}
