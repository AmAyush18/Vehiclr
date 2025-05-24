import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google"
import { Header } from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Vehiclr - Ultimate AI powered Vehicle Marketplace",
  description: "Find your dream car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${inter.variable}`}
        >
          <Header />
          <main className="min-h-screen primary">
            {children}
          </main>
          <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
