export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-1 mt-8 border-t border-opacity-50 dark:border-opacity-50 border-neutral-800 dark:border-neutral-200">
      <span className="font-light opacity-50 text-sm">
        © Copyright {year} Keanu Reaño
      </span>
    </footer>
  );
}
