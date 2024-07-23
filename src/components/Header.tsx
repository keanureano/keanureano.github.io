import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-1 mb-8 border-b border-opacity-50 dark:border-opacity-50 border-neutral-800 dark:border-neutral-200">
      <Link className="text-4xl font-bold" href="/">
        {"<KR>"}
      </Link>
      <nav className="flex items-end space-x-4 font-normal">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/resume.pdf" passHref>
          <a target="_blank" rel="noopener noreferrer">Resume</a>
        </Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
