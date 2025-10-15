import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Betzy - Live Betzy Poker Games",
  description: "An igaming app",
  icons: '/static/img/card.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
