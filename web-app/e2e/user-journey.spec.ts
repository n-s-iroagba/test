import { test, expect } from '@playwright/test';

test.describe('User Journey', () => {
  test('should allow user to login and access profile', async ({ page }) => {
    // 1. Intercept the Login Request
    await page.route('**/api/auth/login', async route => {
      // Mock successful login response
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          token: 'fake-jwt-token',
          user: {
            id: '1',
            email: 'test@example.com',
            firstName: 'Test',
            lastName: 'User'
          }
        }),
      });
    });

    // 2. Intercept Profile GET Request
    await page.route('**/api/users/profile', async route => {
        if (route.request().method() === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    id: '1',
                    email: 'test@example.com',
                    firstName: 'Test',
                    lastName: 'User'
                })
            });
        } else if (route.request().method() === 'PUT') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    id: '1',
                    email: 'test@example.com',
                    firstName: 'Updated',
                    lastName: 'Name'
                })
            });
        }
    });

    // Navigate to login
    await page.goto('/login');
    await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();

    // Fill form
    await page.fill('input[type="email"]', 'test@example.com');
    await page.fill('input[type="password"]', 'password');

    // Submit
    await page.click('button[type="submit"]');

    // Wait for URL change to Home
    await expect(page).toHaveURL('/');

    // Navigate to profile
    await page.goto('/profile');

    await expect(page.getByRole('heading', { name: 'Edit Profile' })).toBeVisible();
    await expect(page.getByDisplayValue('Test')).toBeVisible();

    // Test Update
    await page.fill('input[name="firstName"]', 'Updated');
    await page.click('button:has-text("Save Changes")');

    await expect(page.getByText('Profile updated successfully!')).toBeVisible();
  });
});
