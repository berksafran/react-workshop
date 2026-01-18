import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "React & Next.js Workshop",
  description: "2 günlük React ve Next.js workshop materyalleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
