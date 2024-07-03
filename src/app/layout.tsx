import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeSwitch from "./components/ThemeSwitch";

const inter = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
      <body className="bg-neutral-100 dark:bg-neutral-800">
        <ThemeProvider attribute="class">
          <ThemeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
