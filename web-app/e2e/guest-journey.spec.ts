import { test, expect } from '@playwright/test';

test.describe('Guest User Journey', () => {
  test.beforeEach(async ({ page }) => {
    // Mock Home Page Data
    await page.route('**/content/latest*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{
          id: '1', title: 'Test News', summary: 'Summary', category: 'News', publishedAt: new Date().toISOString()
        }])
      });
    });

    await page.route('**/fixtures/upcoming*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{
          id: '1', homeTeam: 'Team A', awayTeam: 'Team B', date: new Date().toISOString(), venue: 'Stadium', status: 'scheduled'
        }])
      });
    });

    await page.route('**/ad-delivery/select*', async route => {
      await route.fulfill({ status: 200, body: JSON.stringify({}) });
    });

    await page.goto('/');
  });

  test('should display home page with news and fixtures', async ({ page }) => {
    await expect(page).toHaveTitle(/Amafor Gladiators Digital Ecosystem/);
    await expect(page.getByRole('heading', { name: 'Welcome to the Club' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Latest News' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Upcoming Fixtures' })).toBeVisible();
  });

  test('should navigate to players page and filter', async ({ page }) => {
    // Mock Players Data
    await page.route('**/players*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{
          id: 'p1', name: 'John Doe', position: 'Forward', stats: { goals: 10 }
        }, {
          id: 'p2', name: 'Jane Smith', position: 'Defender', stats: { assists: 5 }
        }])
      });
    });

    await page.click('text=Players');
    // Loose match for URL
    await expect(page).toHaveURL(/.*\/players/);

    // In strict mode, getByRole('heading') might fail if multiple H1/H2 share name "First Team Squad".
    // Or if rendering is slow.
    await expect(page.getByRole('heading', { name: 'First Team Squad' })).toBeVisible();

    // Test Search Filter (Client-side)
    const searchInput = page.getByLabel('Search Players');
    await searchInput.fill('NoMatchName');
    await expect(page.getByText('No players found matching your criteria.')).toBeVisible();

    // Clear search
    await searchInput.fill('');
    await expect(page.getByLabel('Position')).toBeVisible();
  });

  test('should use global search', async ({ page }) => {
    // Mock Search
    await page.route('**/search*', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([{
          id: 'p1', type: 'player', title: 'John Doe', subtitle: 'Forward', url: '/players/p1'
        }])
      });
    });

    const searchInput = page.getByPlaceholder('Search...');
    await searchInput.fill('John');
    // Wait for dropdown
    await expect(page.locator('.absolute.z-10')).toBeVisible();
    await expect(page.getByText('John Doe')).toBeVisible();

    await page.click('text=John Doe');
    await expect(page).toHaveURL(/.*\/players\/p1/);
  });
});
