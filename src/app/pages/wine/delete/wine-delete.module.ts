import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineDeleteComponent } from './wine-delete.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    WineDeleteComponent
  ],
  imports: [
    CommonModule, MatDialogModule
  ],
  exports: [WineDeleteComponent],
  entryComponents: [WineDeleteComponent]
})
export class WineDeleteModule { }
