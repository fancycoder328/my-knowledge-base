import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import { Suspense } from "react";
import BouncingBall from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Knowledge Base | Developer Sujay`,
  description: "A side project for keeping my knowledge in-front of public and to allow anyone to see.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-black transition-all`}>
        <Suspense fallback={<BouncingBall />}>
          <NavigationBar />
          {children}
          <Footer />
          <Toaster richColors position="bottom-right" theme="system" closeButton pauseWhenPageIsHidden visibleToasts={7} />
        </Suspense>
      </body>
    </html>
  );
}
