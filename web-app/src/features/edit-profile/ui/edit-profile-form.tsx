'use client';

import React, { useState, useEffect } from 'react';
import { UserService, UpdateUserParams } from '@/shared/api/services/user.service';
import { User } from '@/shared/api/services/auth.service';
import { useToast } from '@/shared/lib/providers/toast-provider';
import { AvatarUpload } from '@/widgets/avatar-upload';

export const EditProfileForm: React.FC = () => {
  const { showToast } = useToast();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<UpdateUserParams>({
    firstName: '',
    lastName: '',
    email: '',
    avatarUrl: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await UserService.getProfile();
        setUser(response.data);
        setFormData({
            firstName: response.data.firstName || '',
            lastName: response.data.lastName || '',
            email: response.data.email || '',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            avatarUrl: (response.data as any).avatarUrl || '',
        });
      } catch (err) {
        console.error("Failed to load profile", err);
        showToast('Failed to load profile data.', 'error');
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await UserService.updateProfile(formData);
      showToast('Profile updated successfully!', 'success');
    } catch (err) {
      console.error(err);
      showToast('Failed to update profile.', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading profile...</div>;

  return (
    <div className="bg-white rounded-lg shadow-card border border-neutral-200 p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-primary-900 mb-6">Edit Profile</h2>

      <div className="mb-8">
        <AvatarUpload
          currentUrl={formData.avatarUrl}
          onUploadComplete={(url) => setFormData(prev => ({ ...prev, avatarUrl: url }))}
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-md transition-colors ${
                saving ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
};
