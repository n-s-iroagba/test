import { render, screen } from '@testing-library/react';
import Home from '../page';
import '@testing-library/jest-dom';

// Mock all services and widgets
jest.mock('@/shared/api/services/content.service', () => ({
  ContentService: {
    getLatestContent: jest.fn().mockResolvedValue({ data: [] }),
  },
}));

jest.mock('@/shared/api/services/league.service', () => ({
  LeagueService: {
    getUpcomingFixtures: jest.fn().mockResolvedValue({ data: [] }),
  },
}));

jest.mock('@/widgets/ad-banner', () => ({
  AdBanner: () => <div data-testid="ad-banner">Ad</div>,
}));

jest.mock('@/widgets/news-card', () => ({
  NewsCard: () => <div>NewsCard</div>,
}));

jest.mock('@/widgets/fixture-card', () => ({
  FixtureCard: () => <div>FixtureCard</div>,
}));

describe('Home Page', () => {
  it('renders correctly', async () => {
    // Since page component is client-side with useEffect, we just check render
    render(<Home />);

    expect(screen.getByRole('heading', { name: 'Welcome to the Club' })).toBeInTheDocument();
    expect(screen.getByTestId('ad-banner')).toBeInTheDocument();
  });
});
