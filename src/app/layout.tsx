import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "@/app/_components/NavBar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PolyLens",
  description: "Polymer Latency Monitoring",
  icons: [{rel: "icon", url: "/favicon.ico"}],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
      <TRPCReactProvider>
        <Navbar/>
        <main className="flex min-h-screen flex-col items-center">
          <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
            <div className="w-full max-w-lg">
              {children}
            </div>
          </div>
        </main>
        <Toaster/>
      </TRPCReactProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}
