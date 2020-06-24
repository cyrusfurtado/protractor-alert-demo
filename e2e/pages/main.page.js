import BasePage from './base.page';

class MainPage extends BasePage {

    constructor() {
        super();
        
        // non angular application
        browser.ignoreSynchronization = true;

        this.url = 'Alerts.html';
        this.pageLoaded = this.isInDom($('title'));
    }

    alertBox() {

    }

    confirmBox() {

    }

    promptBox() {

    }
}

export default new MainPage();