import type { Metadata } from "next";
import "./globals.css";
import Aside from "./components/aside";
import Header from "./components/header";
import { Inter } from 'next/font/google';
import { getOrdinalSuffix } from "./utils/formatDate";

const inter = Inter({
  subsets: ['latin'],
})

async function getEventData() {
  const res = await fetch('http://localhost:3000/api/event', { 
    next: { revalidate: 3600 } 
  });
  const data = await res.json();

  return {
    ...data,
    day: getOrdinalSuffix(data.day)
  };
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Seth Baldridge's RainFocus UI App, created in NextJS 16",
  icons: {
    icon: '/nav-logo.png',
    shortcut: '/nav-logo.png',
    apple: '/nav-logo.png',
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const eventData = await getEventData();

  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#mainContent" className="skipLink">Skip to main content</a>
        <Aside eventData={eventData} />
        <main id="mainContent">
          <Header eventData={eventData} />
          {children}
        </main>
      </body>
    </html>
  );
}
