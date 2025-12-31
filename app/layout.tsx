import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabinet dentaire Dr MEZGUELDI - Genas",
  description: "Cabinet dentaire à Genas. Omnipratique et pédodontie. Soins dentaires de qualité avec technologies de pointe.",
  keywords: "dentiste, cabinet dentaire, Genas, pédodontie, soins dentaires, urgences dentaires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}