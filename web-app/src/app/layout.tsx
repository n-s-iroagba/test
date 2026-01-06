import type { Metadata } from "next";
import Link from "next/link";
import { GlobalSearch } from "@/widgets/global-search";
import { NotificationBell } from "@/widgets/notification-bell";
import { AnalyticsTracker } from "@/widgets/analytics-tracker";
import { ThemeProvider } from "@/shared/lib/providers/theme-provider";
import { ToastProvider } from "@/shared/lib/providers/toast-provider";
import { ThemeToggle } from "@/widgets/theme-toggle";
import { LanguageSwitcher } from "@/widgets/language-switcher";
import { Suspense } from "react";
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
      <body className="antialiased bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen">
        <ThemeProvider>
          <ToastProvider>
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
            <header className="bg-primary-900 text-white p-4 shadow-md">
              <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold font-serif mr-8">Amafor Gladiators</h1>
                  <GlobalSearch />
                </div>
                <nav className="space-x-4 flex items-center ml-4">
                  <Link href="/" className="hover:text-primary-300">Home</Link>
                  <Link href="/players" className="hover:text-primary-300">Players</Link>
                  <Link href="/standings" className="hover:text-primary-300">Standings</Link>
                  <Link href="/news" className="hover:text-primary-300">News</Link>
                  <NotificationBell />
                  <ThemeToggle />
                  <LanguageSwitcher />
                  <Link href="/login" className="bg-primary-700 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ml-4">
                    Sign In
                  </Link>
                </nav>
              </div>
            </header>
            <main className="container mx-auto p-4">
              {children}
            </main>
          </ToastProvider>
        </ThemeProvider>
        <footer className="bg-neutral-800 text-white p-8 mt-8">
           <div className="container mx-auto text-center">
             <p>&copy; 2026 Amafor Gladiators FC. All rights reserved.</p>
           </div>
        </footer>
      </body>
    </html>
  );
}
