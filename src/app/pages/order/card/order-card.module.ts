import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { OrderDeleteModule } from '../delete/order-delete.module';

@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule, OnHoverModule, OrderDeleteModule
  ],
  exports: [OrderCardComponent],
  entryComponents: [OrderCardComponent]
})
export class OrderCardModule { }
