import type { Metadata } from "next";
import "./globals.scss";
import AppShell from "./components/app-shell";
import Header from "./components/header";
import { Inter } from 'next/font/google';
import { eventData } from "@/app/data/event";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: "RainFocus UI",
    template: "%s | RainFocus UI",
  },
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
        <AppShell
          eventData={eventData}
          header={<Header eventData={eventData} />}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
