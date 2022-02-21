import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsRoutingModule } from '../details/details-routing.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, DetailsRoutingModule, MatTabsModule
  ],
  entryComponents: [CommentComponent
  ],
  exports: [CommentComponent
  ],
})
export class CommentModule { }
