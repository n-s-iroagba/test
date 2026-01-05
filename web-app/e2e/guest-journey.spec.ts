import { test, expect } from '@playwright/test';

test.describe('Guest User Journey', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display home page with news and fixtures', async ({ page }) => {
    await expect(page).toHaveTitle(/Amafor Gladiators Digital Ecosystem/);
    await expect(page.getByRole('heading', { name: 'Welcome to the Club' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Latest News' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Upcoming Fixtures' })).toBeVisible();
  });

  test('should navigate to players page and filter', async ({ page }) => {
    await page.click('text=Players');
    await page.waitForURL('**/players');

    // Check for the H1 specifically in the main content area if possible, or just exact match
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
    const searchInput = page.getByPlaceholder('Search...');
    await searchInput.fill('John');
    // Wait for dropdown
    await expect(page.locator('.absolute.z-10')).toBeVisible();
    await expect(page.getByText('John Doe')).toBeVisible();

    await page.click('text=John Doe');
    await expect(page).toHaveURL(/\/players\/1/);
  });
});
