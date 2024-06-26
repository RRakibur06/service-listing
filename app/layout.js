import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";

import StoreProvider from "../components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icrew",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("h-[100vh]",inter.className)}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
