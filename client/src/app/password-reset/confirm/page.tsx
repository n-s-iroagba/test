'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function PasswordResetForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card text-center">
              <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-sky-700" />
              </div>
              <h1 className="text-2xl font-heading text-charcoal mb-4">Password Reset Successful!</h1>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <Link 
                href="/login"
                className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Go to Login
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!token) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card text-center">
              <h1 className="text-2xl font-heading text-charcoal mb-4">Invalid Reset Link</h1>
              <p className="text-slate-600 mb-8">
                This password reset link is invalid or has expired. Please request a new one.
              </p>
              <Link 
                href="/password-reset"
                className="inline-block bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Request New Link
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
          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Set New Password</h1>
            <div className="h-1 w-16 bg-sky-700 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Please enter your new password below.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
                  required
                  minLength={8}
                />
                <p className="text-sm text-slate-500 mt-2">
                  Password must be at least 8 characters long
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
                  required
                  minLength={8}
                />
              </div>

              <button
                type="submit"
                disabled={!password || !confirmPassword || password !== confirmPassword}
                className="w-full bg-sky-700 hover:bg-sky-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-colors font-semibold"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
