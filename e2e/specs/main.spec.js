import mainPage from '../pages/main.page';

describe('Protractor Alert sample', function() {
    beforeAll(async () => {
      await mainPage.goTo();
    });

    it('should perform the alert navigation', async () => {
      expect(mainPage.isTabPaneVisible()).toEqual(true);
      expect(mainPage.isAlertVisible()).toEqual(true);
      const alert = await mainPage.handeAlertNavigation();
      expect(alert.getText()).toEqual('I am an alert box!');
      alert.accept();
    });

    it('should perform the confirm navigation', async () => {
      expect(mainPage.isTabPaneVisible()).toEqual(true);
      const confirm = await mainPage.handeConfirmNavigation();
      expect(confirm.getText()).toEqual('Press a Button !');
      confirm.dismiss();
    });

    it('should perform the prompt navigation', async () => {
      const myName = 'Cyrus';
      expect(mainPage.isTabPaneVisible()).toEqual(true);
      const prompt = await mainPage.handePromptNavigation();
      prompt.sendKeys(myName);
      prompt.accept();
      expect(mainPage.getPromptStatus()).toContain(myName);
    });

  });