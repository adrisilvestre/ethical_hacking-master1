var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    host: 'selenium-ch',
    port:4444
};

webdriverio
  .remote(options)
  .init()
  .url('https://prueba-ci-cd.azurewebsites.net/')
  .saveScreenshot('buddyworks.png') 
  .end();
