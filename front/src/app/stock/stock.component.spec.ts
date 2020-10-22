import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Article } from '../interfaces/article';
import { WidgetModule } from '../widget/widget.module';

import { StockComponent } from './stock.component';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetModule],
      declarations: [StockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    const a: Article = { id: 'asdfafsd', name: 'asdfafds', price: 123, qty: 2 };
    component.toggle(a);
    component.toggle(a);
    expect(component).toBeTruthy();
  });

  it('should remove', () => {
    component.remove();
    expect(component).toBeTruthy();
  });

  it('should refresh', () => {
    component.refresh();
    expect(component).toBeTruthy();
  });
});
