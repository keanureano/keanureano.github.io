export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="font-light opacity-50 mt-8">
      Copyright © {year} Keanu Reaño
    </footer>
  );
}
