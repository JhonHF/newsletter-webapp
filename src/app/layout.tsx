import { Inter as FontSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import "./globals.css";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />

        <main className="p-6">{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
