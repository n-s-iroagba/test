import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/shared/api';

export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // In a real app, this would be:
      // const response = await apiClient.post('/auth/login', { email, password });
      // localStorage.setItem('authToken', response.data.token);

      // Mock login for demo
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email === 'fail@test.com') throw new Error('Invalid credentials');

      localStorage.setItem('authToken', 'mock-token');
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    isLoading,
    error,
  };
};
