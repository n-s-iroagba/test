import { HeaderReactRouter as Header } from '../components/HeaderReactRouter';
import { FooterReactRouter as Footer } from '../components/FooterReactRouter';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would authenticate with backend
    alert('Login functionality will be implemented with backend authentication');
  };

  return (
    <>
      <Header />
      
      <main className="py-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-card p-8">
              <div className="flex items-center justify-center gap-2 mb-8">
                <Shield className="w-10 h-10 text-sky-700" />
                <h1 className="text-3xl font-heading">Login</h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
                    required
                  />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-sky-700 border-slate-300 rounded focus:ring-sky-700"
                    />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </label>
                  <Link to="/password-reset" className="text-sm text-sky-700 hover:underline font-medium">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Login
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-200 space-y-4">
                <p className="text-sm text-slate-600 text-center">
                  Don't have an account?
                </p>
                <div className="grid gap-3">
                  <Link 
                    to="/pro-view/apply"
                    className="text-center border-2 border-sky-700 text-sky-700 hover:bg-sky-50 px-6 py-3 rounded-lg transition-colors font-medium text-sm"
                  >
                    Apply for Pro View (Scouts)
                  </Link>
                  <Link 
                    to="/advertise/register"
                    className="text-center border-2 border-sky-700 text-sky-700 hover:bg-sky-50 px-6 py-3 rounded-lg transition-colors font-medium text-sm"
                  >
                    Register as Advertiser
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-slate-600 mt-6">
              This portal is for staff, scouts, and advertisers only.{' '}
              <Link to="/" className="text-sky-700 hover:underline font-medium">
                Return to main site
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}