import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google"
import { Header } from "@/components/header";

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
          <main className="min-h-screen">
            {children}
          </main>
            <footer className="bg-blue-100 py-12">
              <div className="container font-semibold mx-auto px-4 text-center text-gray-600">
                <p>&copy; 2025 Code Therapist (Ayush Dwivedi)</p>
                <p>Made with ❤️ from Bharat</p>
              </div>
            </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
