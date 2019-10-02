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
        webdriverio.quit();}



try{webdriverio2
    .remote(options)
    .init()
    .url('https://prueba-ci-cd.azurewebsites.net/')
    .findElement(By.id('ft_un')).sendKeys('1070824')
    .findElement(By.id('ft_pd')).sendKeys('5545682')
    .findElement(By.id('submitButton')).Click()
    .manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS)
    .end();}finally{
        webdriverio2.quit();
    }