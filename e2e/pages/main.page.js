import BasePage from './base.page';

class MainPage extends BasePage {

    constructor() {
        super();
        
        // non angular application
        browser.ignoreSynchronization = true;

        // route
        this.url = 'Alerts.html';

        this.pageLoaded = this.isInDom($('title'));

        // locators
        this.tabpanel = $('.tabpane.pullleft');
        this.alertContainer = element(by.css('#OKTab'));
        this.confirmContainer = element(by.css('#CancelTab'));
        this.promptContainer = element(by.css('#Textbox'));
        this.promptStatus = element(by.css('#demo1'));
    }

    isTabPaneVisible() {
        return this.tabpanel.isDisplayed();
    }

    isAlertVisible() {
        return this.alertContainer.isDisplayed();
    }

    async handeAlertNavigation() {
        await this.alertContainer.element(by.css('button')).click();
        await browser.wait(this.isDialoguePresent(), 5000, 'alert not visible');
        return browser.switchTo().alert();
    }

    async handeConfirmNavigation() {
        await this.tabpanel.element(by.cssContainingText('li', 'Alert with OK & Cancel')).click();
        await browser.wait(this.isVisible(this.confirmContainer), 5000, 'confirm container not visible');
        await this.confirmContainer.element(by.css('button')).click();
        await browser.wait(this.isDialoguePresent(), 5000, 'confirm not visible');
        return browser.switchTo().alert();
    }


    async handePromptNavigation() {
        await this.tabpanel.element(by.cssContainingText('li', 'Alert with Textbox')).click();
        await browser.wait(this.isVisible(this.promptContainer), 5000, 'prompt container not visible');
        await this.promptContainer.element(by.css('button')).click();
        await browser.wait(this.isDialoguePresent(), 5000, 'prompt not visible');
        return browser.switchTo().alert();
    }

    getPromptStatus() {
        return this.promptStatus.getText();
    }
}

export default new MainPage();