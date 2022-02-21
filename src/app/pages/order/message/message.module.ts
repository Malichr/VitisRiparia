import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MessageComponent
  ],
  imports: [
    CommonModule, MatDialogModule
  ],
  exports: [MessageComponent],
  entryComponents: [MessageComponent]
})
export class MessageModule { }
