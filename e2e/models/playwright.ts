import { Page } from '@playwright/test';

export class PlaywrightPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://playwright.dev/');
    }

    async getTitle() {
        return await this.page.innerText('.navbar__title');
    }

}