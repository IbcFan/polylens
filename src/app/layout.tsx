import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PolyLens",
  description: "Polymer Latency Monitoring",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
