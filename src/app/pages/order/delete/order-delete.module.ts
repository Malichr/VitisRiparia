import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderDeleteComponent } from './order-delete.component';

@NgModule({
  declarations: [OrderDeleteComponent],
  imports: [
    CommonModule, MatDialogModule
  ],
  exports: [OrderDeleteComponent],
  entryComponents: [OrderDeleteComponent]
})
export class OrderDeleteModule { }
