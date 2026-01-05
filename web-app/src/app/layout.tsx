import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amafor Gladiators Digital Ecosystem",
  description: "Official digital platform for Amafor Gladiators FC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-50 text-neutral-900 min-h-screen">
        <header className="bg-primary-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold font-serif">Amafor Gladiators</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:text-primary-300">Home</Link>
              <Link href="/players" className="hover:text-primary-300">Players</Link>
              <Link href="/news" className="hover:text-primary-300">News</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-neutral-800 text-white p-8 mt-8">
           <div className="container mx-auto text-center">
             <p>&copy; 2026 Amafor Gladiators FC. All rights reserved.</p>
           </div>
        </footer>
      </body>
    </html>
  );
}
