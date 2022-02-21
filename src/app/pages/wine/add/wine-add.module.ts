import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineAddComponent } from './wine-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    WineAddComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [WineAddComponent],
  exports: [WineAddComponent]
})
export class WineAddModule { }
