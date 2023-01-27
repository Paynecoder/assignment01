import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlAbout = "http://localhost:3000/about";
let urlContact = "http://localhost:3000/contact";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Home');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #1 - Home Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Diploma')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.png')
    })
})

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('An investment in knowledge pays the best interest.');
    })

    test('Paragraph Tag', async({ page }) => { 
        await page.goto(urlHome)

        const paragraphText = page.getByRole('paragraph');
        await expect(paragraphText).toContainText('Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.')
    })

    test('More About Us Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'More About Us' }).click();
    })

    test('Contact Us Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'Contact Us' }).click();
    })

    test('Checking to see if two buttons are in the main area', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('a > button')).toHaveCount(2);
    })
})

test.describe('The Arrow Area', () => {
    test('Link Tag and navigation', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('a > span > img')).toHaveCount(1);
    })
})