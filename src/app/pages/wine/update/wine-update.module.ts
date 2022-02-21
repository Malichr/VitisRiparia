import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineUpdateComponent } from './wine-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    WineUpdateComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  entryComponents: [WineUpdateComponent],
  exports: [WineUpdateComponent],
})
export class WineUpdateModule { }
