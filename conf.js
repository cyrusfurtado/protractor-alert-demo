// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    framework: 'jasmine',
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://demo.automationtesting.in',
    specs: ['e2e/**/*.spec.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: false,
        maxInstances: 1,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions'
            ]
        }
    },
    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 50000
    },
    onPrepare: function () {
        let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));
      }
}