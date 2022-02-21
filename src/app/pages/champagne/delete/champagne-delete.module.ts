import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampagneDeleteComponent } from './champagne-delete.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ChampagneDeleteComponent
  ],
  imports: [
    CommonModule, MatDialogModule
  ],
  exports: [ChampagneDeleteComponent],
  entryComponents: [ChampagneDeleteComponent]
})
export class ChampagneDeleteModule { }
