import mainPage from '../pages/main.page';

describe('Protractor Demo App', function() {
    beforeAll(() => {
      mainPage.goTo();
    });

    it('should have a title', async function() {
      expect(browser.getTitle()).toEqual('Alerts');
    });
  });