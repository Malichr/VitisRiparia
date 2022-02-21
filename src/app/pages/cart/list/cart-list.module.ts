import { CartListRoutingModule } from './cart-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list.component';

@NgModule({
  declarations: [
    CartListComponent
  ],
  imports: [
    CommonModule, CartListRoutingModule
  ],
  exports: [CartListComponent],
  entryComponents: [CartListComponent]
})
export class CartListModule { }
