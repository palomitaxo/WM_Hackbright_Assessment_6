const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});
//test included
describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  //1st test added
  test("Check that clicking an “Add to Duo” button displays the div with id = “player-duo”", async () => {
    await driver.get("http://localhost:8000");
    const addDuoBtn = await driver.findElement(By.id("Add to Duo"));
    await addDuoBtn.click();
    await driver.wait(until.elementLocated(By.id("Player Duo")), 1000);
  });

  //2nd test added
  test("Check that when a bot is “Removed from Duo”, that it goes back to “choices”", async () => {
    await driver.get("http://localhost:8000");
    const removeDuoBtn = await driver.findElement(By.id("Removed from Duo"));
    const addDuoBtn = await driver.findElement(By.id("Add to Duo Button"));
    await addDuoBtn.click();
    await removeDuoBtn.click();
    await driver.wait(until.elementLocated(By.id("choices")), 1000);
  });
});
