import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('주요 내용과 외부 프로젝트 링크를 제공한다', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page).toHaveTitle('서강의 — 개발 포트폴리오');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole('heading', { name: '일요시네마', exact: true }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /프로젝트 코드 보기/ })).toHaveAttribute(
    'href',
    'https://github.com/codestates-seb/seb45_main_001',
  );
  await expect(
    page.getByRole('heading', { name: '코드스테이츠 프론트엔드 과정' }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test('메뉴와 본문 바로가기가 실제 섹션으로 이동한다', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: '본문으로 건너뛰기' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await page.getByRole('navigation').getByRole('link', { name: '프로젝트' }).click();
  await expect(page).toHaveURL(/#projects$/);
  await page.getByRole('navigation').getByRole('link', { name: '연결하기' }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact')).toBeInViewport();
});

test('좁은 화면과 긴 내용에서 가로 넘침이 없다', async ({ page }) => {
  for (const width of [320, 390, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const overflows = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflows, `viewport ${width}px`).toBe(false);
  }
});

test('주요 접근성 규칙을 통과한다', async ({ page }) => {
  await page.goto('/');
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(result.violations).toEqual([]);
});

test('동작 감소 설정을 존중하고 화면을 기록한다', async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  expect(
    await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
  ).toBe('auto');
  await page.screenshot({ path: testInfo.outputPath('portfolio.png'), fullPage: true });
});
