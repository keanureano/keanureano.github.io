import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keanu Reaño",
  description:
    "Welcome to my portfolio showcasing my skills and projects. Built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="max-w-3xl p-8 mx-auto bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
