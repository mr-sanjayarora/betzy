import type { Metadata } from "next";
import "../globals.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

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
        <Sidebar/>
        <Header/>
        <div className="ml-0 md:ml-72 p-5 pb-0">
          {children}
        </div>
      </body>
    </html>
  );
}
