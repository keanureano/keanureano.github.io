import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
