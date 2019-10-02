var webdriverio = require('webdriverio');
var webdriverio2 = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
try{webdriverio
    .remote(options)
    .init()
    .url('https://prueba-ci-cd.azurewebsites.net/')
    .saveScreenshot('buddyworks.png') 
    .end();}finally {
        // Close the browser.
        }
