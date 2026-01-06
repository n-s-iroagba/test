'use client';

import React, { useRef, useState } from 'react';
import { FileUploadService } from '@/shared/api/services/file-upload.service';
import { useToast } from '@/shared/lib/providers/toast-provider';

interface AvatarUploadProps {
  currentUrl?: string;
  onUploadComplete: (url: string) => void;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({ currentUrl, onUploadComplete }) => {
  const { showToast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(currentUrl);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Basic validation
    if (!file.type.startsWith('image/')) {
      showToast('Please upload an image file.', 'error');
      return;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB
      showToast('File size must be less than 5MB.', 'error');
      return;
    }

    setUploading(true);
    try {
      const response = await FileUploadService.uploadFile(file);
      const newUrl = response.data.url;
      setPreviewUrl(newUrl);
      onUploadComplete(newUrl);
      showToast('Avatar uploaded successfully!', 'success');
    } catch (error) {
      console.error(error);
      showToast('Failed to upload avatar.', 'error');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-neutral-200">
        {previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={previewUrl} alt="Avatar" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-neutral-400">👤</div>
        )}
        {uploading && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        disabled={uploading}
        className="text-sm font-medium text-primary-600 hover:text-primary-800 focus:outline-none"
      >
        {uploading ? 'Uploading...' : 'Change Photo'}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
