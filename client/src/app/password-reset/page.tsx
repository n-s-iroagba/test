'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, Mail } from 'lucide-react'
import { useState } from 'react'

export default function PasswordResetRequest() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-sky-700" />
              </div>
              <h1 className="text-2xl font-heading text-charcoal mb-4">Check Your Email</h1>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If an account exists with <strong>{email}</strong>, you will receive a password 
                reset link within a few minutes.
              </p>
              <p className="text-sm text-slate-600 mb-8">
                Didn't receive the email? Check your spam folder or try again.
              </p>
              <Link 
                href="/login"
                className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Return to Login
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <Link href="/login" className="inline-flex items-center gap-2 text-charcoal hover:text-sky-700 mb-8 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>

          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Reset Password</h1>
            <div className="h-1 w-16 bg-sky-700 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!email}
                className="w-full bg-sky-700 hover:bg-sky-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                Remember your password?{' '}
                <Link href="/login" className="text-sky-700 hover:text-sky-800 font-semibold">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
