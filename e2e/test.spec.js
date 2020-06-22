describe('Protractor Demo App', function() {
    beforeEach(async () => {
      browser.waitForAngularEnabled(false);
      await browser.get('http://demo.automationtesting.in/Alerts.html', 10000);
      await browser.wait(async () => protractor.ExpectedConditions.presenceOf($('#titlesxxx')), 10000);
    });

    it('should have a title', async function() {
      expect(browser.getTitle()).toEqual('Alerts');
    });
  });