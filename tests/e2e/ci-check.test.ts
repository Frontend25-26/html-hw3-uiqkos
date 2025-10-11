import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Есть инпут с типом checkbox', async ({ page }) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    
    const count = await checkboxes.count();
    
    expect(count).toBeGreaterThan(0);
})

test('Есть инпут с типом radio', async ({ page }) => {
    const radioButtons = page.locator('input[type="radio"]');
    
    const count = await radioButtons.count();
    
    expect(count).toBeGreaterThan(0);
})

test('Отсутствуют теги script на странице', async ({ page }) => {
    const userScripts = page.locator('script:not([src*="/@vite"])');

    await expect(userScripts).toHaveCount(0);
})
