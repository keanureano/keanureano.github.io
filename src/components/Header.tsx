import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-1 mb-8 border-b border-opacity-50 dark:border-opacity-50 border-neutral-800 dark:border-neutral-200">
      <Link className="text-4xl font-black" href="/">
        {"<KR>"}
      </Link>
      <nav className="flex items-end space-x-4 font-normal">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
