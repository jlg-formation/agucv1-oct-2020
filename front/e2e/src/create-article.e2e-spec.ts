import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { StockPage } from './stock.po';
import { CreatePage } from './create.po';
import { Article, NewArticle } from '../../src/app/interfaces/article';

describe('workspace-project Create Article', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let createPage: CreatePage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    createPage = new CreatePage();
  });

  it('should create an article', async () => {
    await page.navigateTo();
    await page.clickOnSeeStockBtn();
    await stockPage.clickOnAddBtn();
    const toolName = 'Tournevis ' + Math.floor(Math.random() * 1e9);
    await createPage.fillForm({
      name: toolName,
      price: 1.23,
      qty: 34,
    } as NewArticle);
    await createPage.clickOnAddBtn();
    const article: NewArticle = await stockPage.getLastElement();
    expect(article.name).toBeTruthy(toolName);
    expect(article.price).toBeTruthy(1.23);
    expect(article.qty).toBeTruthy(34);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
