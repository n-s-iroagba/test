'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  const navigation = [
    { name: 'News', href: '/news' },
    { name: 'Fixtures', href: '/fixtures' },
    { name: 'Academy', href: '/academy' },
    { name: 'Support', href: '/support' },
    { name: 'Advertise', href: '/advertise' },
    { name: 'Pro View', href: '/pro-view' },
  ]

  return (
    <header className="bg-charcoal text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading hover:text-sky-400 transition-colors">
            Amafor Gladiators FC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold hover:text-sky-400 transition-colors ${
                  pathname?.startsWith(item.href) ? 'text-sky-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search & Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent w-48"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            <Link
              href="/login"
              className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 font-semibold transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-sky-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold hover:text-sky-400 transition-colors ${
                    pathname?.startsWith(item.href) ? 'text-sky-400' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-sky-600"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
              <Link
                href="/login"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 font-semibold text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
