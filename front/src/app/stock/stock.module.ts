import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { StockComponent } from './stock.component';
import { CreateComponent } from './create/create.component';
import { WidgetModule } from '../widget/widget.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [StockComponent, CreateComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    WidgetModule,
    ReactiveFormsModule,
  ],
})
export class StockModule {}
