using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace BuddyCIUnitTestProject
{
    [TestClass]
    public class BuddySeleniumTest
    {
        ChromeDriver Driver { get; set; }
        WebDriverWait Wait { get; set; }
        [TestMethod]
        public void TestMethod1()
        {
            try
            {
                string url = "http://localhost:53557/";
                Driver = new ChromeDriver();
                Driver.Navigate().GoToUrl(url);
                Driver.Manage().Window.Maximize();
                Driver.FindElementById("ft_un").SendKeys("1070824");
                Driver.FindElementById("ft_pd").SendKeys("5545682");
                Driver.FindElementById("submitButton").Click();
                Driver.Close();
                Driver.Dispose();
            }
            catch
            {
                ITakesScreenshot screenshotDriver = Driver as ITakesScreenshot;
                Screenshot screenshot = screenshotDriver.GetScreenshot();
                Driver.Quit();
            }
        }
    }
}
