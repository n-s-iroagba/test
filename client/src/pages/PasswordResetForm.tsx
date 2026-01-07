import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export function PasswordResetForm() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // In production, this would update the password
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Header />
        <main className="py-16 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-4 max-w-md">
            <div className="bg-white border border-slate-200 p-8 text-center">
              <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-sky-600" />
              </div>
              <h1 className="text-2xl font-heading text-charcoal mb-4">Password Reset Successful!</h1>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
              <Link 
                to="/login"
                className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 transition-colors font-semibold"
              >
                Go to Login
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
          <div className="bg-white border border-slate-200 p-8">
            <h1 className="text-3xl font-heading text-charcoal mb-2">Create New Password</h1>
            <div className="h-1 w-16 bg-sky-600 mb-6"></div>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Enter your new password below. Make sure it's strong and secure.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  New Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                  minLength={8}
                />
                <p className="text-xs text-slate-500 mt-2">
                  Must be at least 8 characters long
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Confirm New Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
                  required
                  minLength={8}
                />
              </div>

              {password && confirmPassword && password !== confirmPassword && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 mb-6 text-sm">
                  Passwords do not match
                </div>
              )}

              <button
                type="submit"
                disabled={!password || !confirmPassword || password !== confirmPassword}
                className="w-full bg-sky-600 hover:bg-sky-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 transition-colors font-semibold mb-4"
              >
                Reset Password
              </button>

              <p className="text-center text-sm text-slate-600">
                Remember your password?{' '}
                <Link to="/login" className="text-sky-600 hover:text-sky-700 font-semibold">
                  Log in
                </Link>
              </p>
            </form>
          </div>

          {token && (
            <p className="text-center text-xs text-slate-500 mt-6">
              Reset token: {token.substring(0, 8)}...
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}