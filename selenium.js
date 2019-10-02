var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
  .remote(options)
  .init()
  .url('https://prueba-ci-cd.azurewebsites.net/')
  .saveScreenshot('buddyworks.png') 
  .end();
