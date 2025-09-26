import type { Metadata } from "next";
import "./globals.css";
import Header from "./section-components/header";
import Sidebar from "./section-components/sidebar";

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
    <html lang="en" className="bg-[#270e09]">
      <body>
        <Sidebar/>
        <Header/>
        <div className="ms-[280px] p-5">
          {children}
        </div>
      </body>
    </html>
  );
}
