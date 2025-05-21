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
          <main className="min-h-screen primary">
            {children}
          </main>
            <footer className="py-12 secondary">
              <div className="container font-semibold mx-auto px-4 text-center text-gray-600">
                <p>&copy; 2025 <strong>Vehiclr</strong> by Code Therapist (Ayush Dwivedi)</p>
                <p>Made with ❤️ from <strong>Bharat</strong></p>
              </div>
            </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
