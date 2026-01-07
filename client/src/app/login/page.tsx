'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState<'supporter' | 'advertiser' | 'scout' | 'media' | 'admin'>('supporter')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - in production, this would authenticate with backend
    console.log('Login attempt:', { email, userType })
    
    // Redirect based on user type
    switch (userType) {
      case 'scout':
        router.push('/pro-view/dashboard')
        break
      case 'advertiser':
        router.push('/advertiser/dashboard')
        break
      case 'media':
        router.push('/media/dashboard')
        break
      case 'admin':
        router.push('/admin/dashboard')
        break
      default:
        router.push('/')
    }
  }

  const userTypes = [
    { value: 'supporter', label: 'Supporter/Fan', desc: 'Access supporter features' },
    { value: 'advertiser', label: 'Advertiser', desc: 'Manage ad campaigns' },
    { value: 'scout', label: 'Professional Scout', desc: 'Pro View portal access' },
    { value: 'media', label: 'Media Manager', desc: 'Content management' },
    { value: 'admin', label: 'Administrator', desc: 'Full system access' }
  ]

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-white border border-slate-200 p-8">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Welcome Back</h1>
            <div className="h-1 w-16 bg-sky-600 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Sign in to access your account
            </p>

            <form onSubmit={handleSubmit}>
              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-3">
                  I am a <span className="text-red-600">*</span>
                </label>
                <div className="space-y-2">
                  {userTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-colors ${
                        userType === type.value
                          ? 'border-sky-600 bg-sky-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type.value}
                        checked={userType === type.value}
                        onChange={(e) => setUserType(e.target.value as any)}
                        className="mt-1"
                      />
                      <div>
                        <div className="font-semibold text-charcoal">{type.label}</div>
                        <div className="text-xs text-slate-600">{type.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-slate-700">Remember me</span>
                </label>
                <Link href="/password-reset" className="text-sm text-sky-600 hover:text-sky-700 font-semibold">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!email || !password}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 transition-colors font-semibold mb-6"
              >
                Sign In
              </button>

              {/* Register Links */}
              <div className="text-center text-sm text-slate-600 space-y-2">
                <p>Don't have an account?</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/advertise/register" className="text-sky-600 hover:text-sky-700 font-semibold">
                    Register as Advertiser
                  </Link>
                  <span>•</span>
                  <Link href="/pro-view/apply" className="text-sky-600 hover:text-sky-700 font-semibold">
                    Apply for Pro View
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
      <WhatsAppWidget />
    </>
  )
}
