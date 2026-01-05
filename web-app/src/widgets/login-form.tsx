'use client';

import React, { useState } from 'react';
import { AuthService } from '@/shared/api/services/auth.service';
import { useRouter } from 'next/navigation';

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await AuthService.login({ email, password });
      if (response.data.token) {
        // Simple token storage (in a real app, use a more secure method or httpOnly cookies via backend)
        if (typeof window !== 'undefined') {
            localStorage.setItem('authToken', response.data.token);
        }
        router.push('/');
      }
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-card border border-neutral-200">
      <h2 className="text-2xl font-bold text-center text-primary-900 mb-6">Sign In</h2>

      {error && (
        <div className="mb-4 p-3 bg-error-50 text-error-600 rounded text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-neutral-600">
            <input type="checkbox" className="mr-2 text-primary-600 rounded" />
            Remember me
          </label>
          <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">Forgot Password?</a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-md transition-colors ${
            loading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-neutral-500">
        Don&apos;t have an account?{' '}
        <a href="/register" className="text-primary-600 hover:text-primary-800 font-bold">Sign up</a>
      </div>
    </div>
  );
};
