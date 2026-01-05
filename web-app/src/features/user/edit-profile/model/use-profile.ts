import { useState, useEffect } from 'react';
import { User, userApi } from '@/entities/user';

export const useProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await userApi.getCurrentUser();
      setUser(response.data);
    } catch (err: any) {
      setError(err.message || 'Failed to load user');
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!user) return;
    setIsSaving(true);
    setError(null);
    setSuccessMessage(null);
    try {
      // Mock update
      // await userApi.updateProfile(user.id, data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUser({ ...user, ...data });
      setSuccessMessage('Profile updated successfully!');
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  return {
    user,
    isLoading,
    isSaving,
    error,
    successMessage,
    updateProfile
  };
};
