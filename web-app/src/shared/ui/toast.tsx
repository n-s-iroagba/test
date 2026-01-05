'use client';

import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  onClose: (id: string) => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ id, message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️',
    warning: '⚠️',
  };

  return (
    <div className={`flex items-center p-4 mb-3 rounded shadow-lg text-white ${bgColors[type]} transition-opacity duration-300`}>
      <span className="mr-3 text-lg">{icons[type]}</span>
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button onClick={() => onClose(id)} className="ml-4 hover:text-gray-200 focus:outline-none">
        ✕
      </button>
    </div>
  );
};
