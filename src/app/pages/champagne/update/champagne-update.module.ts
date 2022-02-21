import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampagneUpdateComponent } from './champagne-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ChampagneUpdateComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatSelectModule, MatFormFieldModule
  ],
  entryComponents: [ChampagneUpdateComponent],
  exports: [ChampagneUpdateComponent],
})
export class ChampagneUpdateModule { }
