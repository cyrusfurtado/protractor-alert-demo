export default class BasePage {
    constructor() {
        this.EC = protractor.ExpectedConditions;
        this.url = '/';

        this.timeout = {
            sm: 5000,
            md: 10000,
            lg: 20000,
            xl: 30000
        };
    }

    isLoaded() {
        return browser.wait(async () => await this.pageLoaded(), this.timeout.md, 'waiting for load of ' + this.url);
    }

    async goTo() {
        await browser.get(this.url, this.timeout.md);
        return this.isLoaded();
    }

    isInDom(locator) {
        return this.EC.presenceOf(locator);
    }

    isNotInDom(locator) {
        return this.EC.stalenessOf(locator);
    }

    isDialoguePresent() {
        return this.EC.alertIsPresent();
    }

    isVisible(locator) {
        return this.EC.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return this.EC.invisibilityOf(locator);
    }
}