import { by, element } from 'protractor';
import { NewArticle } from 'src/app/interfaces/article';

export class CreatePage {
  async fillForm(a: NewArticle): Promise<void> {
    const inputName = element(by.css('input[formcontrolname="name"]'));
    await inputName.clear();
    await inputName.sendKeys(a.name);
    const inputPrice = element(by.css('input[formcontrolname="price"]'));
    await inputPrice.clear();
    await inputPrice.sendKeys(a.price);
    const inputQty = element(by.css('input[formcontrolname="qty"]'));
    await inputQty.clear();
    await inputQty.sendKeys(a.qty);
  }

  async clickOnAddBtn(): Promise<void> {
    const btn = element(by.css('button.primary'));
    await btn.click();
  }
}
