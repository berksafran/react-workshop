import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "./components/Header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
