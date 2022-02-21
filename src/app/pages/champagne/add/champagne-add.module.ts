import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampagneAddComponent } from './champagne-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ChampagneAddComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatSelectModule
  ],
  entryComponents: [ChampagneAddComponent],
  exports: [ChampagneAddComponent]
})
export class ChampagneAddModule { }
