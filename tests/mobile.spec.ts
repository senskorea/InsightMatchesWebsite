import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('language', location.pathname.startsWith('/ko') ? 'ko' : location.pathname.startsWith('/fr') ? 'fr' : 'en');
    localStorage.setItem('darkMode', 'false');
  });
});

const routes = ['/', '/fr/', '/ko/', '/platform', '/fr/platform', '/ko/platform', '/about', '/careers', '/ko/careers', '/jobs', '/resources', '/resources/videos', '/resources/news', '/request-demo', '/dissemination', '/education', '/referral', '/resources/horizon-europe', '/resources/guide-horizon-europe-korea', '/about/gep', '/network-busan'];

for (const width of [320, 375, 390, 768, 1024, 1440]) {
  test(`Public pages fit a ${width}px viewport`, async ({ page }) => {
    await page.setViewportSize({ width, height: 812 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of routes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await expect(page.locator('h1').first(), route).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth), { message: route }).toBeLessThanOrEqual(width + 1);
      const clippedText = await page.locator('h1,h2,h3').evaluateAll(elements => elements.filter(element => element.scrollWidth > element.clientWidth + 2 && element.clientWidth > 0).map(element => element.textContent));
      expect(clippedText, route).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}

for (const viewport of [{ width: 375, height: 812 }, { width: 812, height: 375 }]) {
  test(`Navigation and dialogs at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => window.scrollTo(0, 700));
    await page.getByRole('button', { name: 'Open navigation' }).click();
    const menu = page.locator('#mobile-navigation');
    await expect(menu).toBeVisible();
    const navBox = await page.locator('nav').boundingBox();
    const menuBox = await menu.boundingBox();
    expect(Math.abs(menuBox!.y - (navBox!.y + navBox!.height))).toBeLessThan(2);
    expect(Math.abs(menuBox!.y + menuBox!.height - viewport.height)).toBeLessThan(2);
    await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveCount(0);
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await menu.getByRole('link', { name: 'Pricing', exact: true }).click();
    await expect(menu).toHaveCount(0);
    await expect(page).toHaveURL(/#pricing$/);
    await expect.poll(() => page.locator('#pricing').evaluate(el => el.getBoundingClientRect().top)).toBeGreaterThanOrEqual(100);
    await page.getByRole('button', { name: 'Watch demo', exact: true }).first().click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.locator('iframe')).toHaveAttribute('src', /-q7EZzowLTE/);
    const box = await dialog.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(15);
    expect(box!.y).toBeGreaterThanOrEqual(15);
    expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height - 15);
    await dialog.getByRole('button', { name: 'Close', exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await page.getByRole('button', { name: 'Dismiss', exact: true }).click();
    await expect(page.locator('nav')).toHaveCSS('top', '0px');
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await menu.getByRole('link', { name: 'Request Demo', exact: true }).click();
    await expect(page).toHaveURL('/request-demo');
    await expect(menu).toHaveCount(0);
    await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
  });
}

test('Phone previews save data and remain playable, with usable footer language picker', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  const videos: string[] = [];
  page.on('request', request => { if (request.url().includes('.mp4')) videos.push(request.url()); });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const previews = page.locator('#product-demo button[aria-label="Watch demo"]');
  await expect(previews).toHaveCount(4);
  for (const preview of await previews.all()) {
    await preview.scrollIntoViewIfNeeded();
    await expect(preview.locator('img')).toBeVisible();
    await expect.poll(() => preview.locator('img').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
  }
  expect(videos).toEqual([]);
  await previews.first().click();
  await expect(page.getByRole('dialog').locator('video')).toHaveAttribute('src', '/videos/find-funds.mp4');
  await page.getByRole('dialog').getByRole('button', { name: 'Close', exact: true }).click();
  await page.getByRole('button', { name: 'Choose language' }).click();
  const french = page.getByRole('button', { name: /Français/ });
  const box = await french.boundingBox();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(320);
  await french.click();
  await expect(page).toHaveURL(/\/fr\/?$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
});

test('Mobile inputs avoid iOS focus zoom; dark mode and menu resize remain usable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/request-demo', { waitUntil: 'domcontentloaded' });
  const inputs = await page.locator('input:not([type="checkbox"]):not([type="radio"]):visible, textarea:visible').evaluateAll(elements => elements.map(element => parseFloat(getComputedStyle(element).fontSize)));
  expect(inputs.length).toBeGreaterThan(0);
  expect(inputs.every(size => size >= 16)).toBe(true);
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Toggle theme' }).filter({ visible: true }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await expect(page.locator('#mobile-navigation')).toHaveCSS('background-color', 'rgb(15, 23, 42)');
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(page.locator('#mobile-navigation')).toHaveCount(0);
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});
