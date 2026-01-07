'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function AdvertiserRegistration() {
  const [businessName, setBusinessName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white border border-slate-200 p-12 rounded-lg shadow-card text-center">
              <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-sky-700" />
              </div>
              <h1 className="text-3xl font-heading text-charcoal mb-4">Application Submitted Successfully!</h1>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Thank you for registering as an advertiser. Your application is now{' '}
                <span className="font-semibold text-sky-700">pending verification</span>.
              </p>
              <div className="bg-slate-50 p-6 mb-8 rounded-lg text-left">
                <h3 className="font-heading text-charcoal mb-4">What happens next?</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="text-sky-700 font-bold">✓</span>
                    <span>Our commercial team will review your application within 24-48 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-700 font-bold">✓</span>
                    <span>You'll receive an email notification once your account is verified</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-sky-700 font-bold">✓</span>
                    <span>After verification, you can log in and create your first ad campaign</span>
                  </li>
                </ul>
              </div>
              <div className="text-slate-600 mb-8">
                <p>A confirmation email has been sent to:</p>
                <p className="font-semibold text-charcoal mt-1">{email}</p>
              </div>
              <Link 
                href="/"
                className="inline-block bg-charcoal hover:bg-charcoal/90 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Return to Homepage
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
        <div className="container mx-auto px-4 max-w-2xl">
          <Link href="/advertise" className="inline-flex items-center gap-2 text-charcoal hover:text-sky-700 mb-8 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Advertise Info
          </Link>

          <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-card">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Register as an Advertiser</h1>
            <div className="h-1 w-16 bg-sky-700 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Complete the form below to create your advertiser account. 
              Your account will be reviewed and verified within 24-48 hours.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Business Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your business or company name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Business Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="business@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
                  required
                />
                <p className="text-sm text-slate-500 mt-2">
                  This will be your login email and where we send campaign notifications
                </p>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Business Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="+234 XXX XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-transparent"
                  required
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 mb-8 rounded-lg">
                <p className="text-sm text-blue-900 leading-relaxed">
                  <strong>Note:</strong> By registering, you agree to our advertising terms and conditions. 
                  All campaign content must comply with our guidelines and will be reviewed before publication.
                </p>
              </div>

              <button
                type="submit"
                disabled={!businessName || !email || !phone}
                className="w-full bg-sky-700 hover:bg-sky-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg transition-colors font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-slate-600">
            <p>Already have an account?{' '}
              <Link href="/login" className="text-sky-700 hover:text-sky-800 font-semibold">
                Log in here
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
