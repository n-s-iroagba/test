import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../theme-toggle';
import { ThemeProvider } from '@/shared/lib/providers/theme-provider';
import '@testing-library/jest-dom';

// Mock ThemeService
jest.mock('@/shared/api/services/theme.service', () => ({
  ThemeService: {
    getTheme: jest.fn().mockResolvedValue({ data: { mode: 'light' } }),
    updateTheme: jest.fn().mockResolvedValue({}),
  },
}));

describe('ThemeToggle', () => {
  it('renders and toggles theme', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const button = screen.getByRole('button', { name: /Toggle Theme/i });
    expect(button).toBeInTheDocument();

    // Initial state (light) -> Moon icon
    expect(button).toHaveTextContent('🌙');

    // Click toggle
    fireEvent.click(button);

    // New state (dark) -> Sun icon
    expect(button).toHaveTextContent('☀️');
  });
});
