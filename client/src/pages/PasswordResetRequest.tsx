import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { useState } from 'react';

export function PasswordResetRequest() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send reset email
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-sky-600" />
              </div>
              <h1 className="text-2xl font-heading text-charcoal mb-4">Check Your Email</h1>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We've sent password reset instructions to:
              </p>
              <p className="font-semibold text-charcoal mb-8">{email}</p>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                If you don't see the email within a few minutes, please check your spam folder.
              </p>
              <Link 
                to="/login"
                className="inline-block text-sky-600 hover:text-sky-700 font-semibold"
              >
                Return to Login
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-md">
          <Link to="/login" className="inline-flex items-center gap-2 text-charcoal hover:text-sky-600 mb-8 font-semibold transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>

          <div className="bg-white border border-slate-200 p-8">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Reset Your Password</h1>
            <div className="h-1 w-16 bg-sky-600 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <form onSubmit={handleSubmit}>
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

              <button
                type="submit"
                disabled={!email}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 transition-colors font-semibold mb-4"
              >
                Send Reset Instructions
              </button>

              <p className="text-center text-sm text-slate-600">
                Remember your password?{' '}
                <Link to="/login" className="text-sky-600 hover:text-sky-700 font-semibold">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}