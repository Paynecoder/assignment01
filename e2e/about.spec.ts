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
        await page.goto(urlAbout)

        await expect(page).toHaveTitle('About Us');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlAbout)
        
        const metaDescriptionOne = page.locator('meta[name="author"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "MDIA 2109")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #1 - About Us Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT Digital Design and Development Diploma')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlAbout)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.png')
    })
})

test.describe('Main area', () => {
    test('Header Tags', async({ page }) => {
        await page.goto(urlAbout)

        await expect(page.locator('div > h1')).toHaveCount(2);
    })

    test('Count number of paragraphs under first content area', async({ page }) => {
        await page.goto(urlAbout)

        await expect(page.locator('div > p')).toHaveCount(7);
    })

    test('Count number of h2 headers in first content area', async({ page }) => {
        await page.goto(urlAbout)

        await expect(page.locator('div > h2')).toHaveCount(2);
    })

    test('Count number of h3 headers in first content area', async({ page }) => {
        await page.goto(urlAbout)

        await expect(page.locator('div > h3')).toHaveCount(1);
    })
})

test.describe('Carousel area', () => {
    test('Carousel Arrows', async({ page }) => {
        await page.goto(urlAbout)

        await page.screenshot({ path: '/icons/leftArrow.png'})


        await page.screenshot({ path: '/icons/rightArrow.png'})
    })

    test('Carousel main container area stylizing', async({ page }) => { 
        await page.goto(urlAbout)

        const carousel = page.locator('#carouselImage');

        const grabbedHeight = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })
        console.log(grabbedHeight);
        expect(grabbedHeight).toBe("200px");

        const grabbedBackgroundRepeat = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-repeat")
        })
        console.log(grabbedBackgroundRepeat);
        expect(grabbedBackgroundRepeat).toBe("no-repeat");

        const grabbedBackgroundSize = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-size")
        })
        console.log(grabbedBackgroundSize);
        expect(grabbedBackgroundSize).toBe("cover");

        const grabbedDisplay = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })
        console.log(grabbedDisplay);
        expect(grabbedDisplay).toBe("flex");

        const grabbedJustifyContent = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("justify-content")
        })
        console.log(grabbedJustifyContent);
        expect(grabbedJustifyContent).toBe("center");

        const grabbedAlignItems = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("align-items")
        })
        console.log(grabbedAlignItems);
        expect(grabbedAlignItems).toBe("center");

        const grabbedMargin = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })
        console.log(grabbedMargin);
        expect(grabbedMargin).toBe("40px 0px");
    })

    test('Carousel center text stylizing', async({ page }) => {
        await page.goto(urlAbout)

        const carousel = page.locator('#testOnImageHere');

        const grabbedBackgroundColor = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(grabbedBackgroundColor);
        expect(grabbedBackgroundColor).toBe("rgba(16, 46, 53, 0.5)");

        const grabbedPaddingCarousel = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })
        expect(grabbedPaddingCarousel).toBe("10px");

        const grabbedMarginCarousel = await carousel.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("margin")
        })
        expect(grabbedMarginCarousel).toBe("0px 50px");
    })

    test('Should contain an unordered list of information', async ({ page }) => {
        await page.goto(urlAbout)
        await expect(page.locator('ul > li')).toContainText(["Applied & Natural Sciences", "Business & Media", "Computing & IT", "Engineering", "Health Sciences", "Trades & Apprenticeships"]);
    })
})


test.describe('The Arrow Area', () => {
    test('Link tag and navigation', async({ page }) => {
        await page.goto(urlAbout)

        await expect(page.locator('a > span > img')).toHaveCount(2);
    })
})