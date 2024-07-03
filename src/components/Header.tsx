import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <Link className="text-4xl font-black" href="/">
        {"<KR>"}
      </Link>
      <nav className="flex items-end space-x-4 font-light">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
