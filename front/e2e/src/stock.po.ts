import { by, element } from 'protractor';
import { NewArticle } from 'src/app/interfaces/article';

export class StockPage {
  async clickOnAddBtn(): Promise<void> {
    const btn = element(by.css('button[routerlink="create"]'));
    await btn.click();
  }

  async getLastElement(): Promise<NewArticle> {
    const name = await element(by.css('tr:last-child td.name')).getText();
    const price = await element(by.css('tr:last-child td.price')).getText();
    const qty = await element(by.css('tr:last-child td.qty')).getText();
    return {
      name,
      price: +price.replace(' €', '').replace(',', '.'),
      qty: +qty,
    };
  }
}
