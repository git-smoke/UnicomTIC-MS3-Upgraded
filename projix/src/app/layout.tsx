import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"; //alias imports
import "./globals.css"; //relative import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projix",
  description: "This is a project Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        {children}
      </body>
    </html>
  );
}
