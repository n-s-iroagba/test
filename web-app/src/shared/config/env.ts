export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.clubportal.com/v1',
  IS_DEV: process.env.NODE_ENV === 'development',
};
