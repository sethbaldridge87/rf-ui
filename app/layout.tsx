import type { Metadata } from "next";
import "./globals.css";
import Aside from "./components/aside";
import Header from "./components/header";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Seth Baldridge's RainFocus UI App, created in NextJS 16",
  icons: {
    icon: '/nav-logo.png',
    shortcut: '/nav-logo.png',
    apple: '/nav-logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Aside></Aside>
        <main>
        <Header>
          
        </Header>
        {children}
        </main>
      </body>
    </html>
  );
}
