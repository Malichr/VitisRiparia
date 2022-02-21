import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartAddComponent } from './cart-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartAddComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  entryComponents: [CartAddComponent],
  exports: [CartAddComponent]
})
export class CartAddModule { }
