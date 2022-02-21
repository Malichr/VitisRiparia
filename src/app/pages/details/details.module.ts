import { CommentModule } from './../comment/comment.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { DetailsRoutingModule } from './details-routing.module';
import { CartAddModule } from '../cart/add/cart-add.module';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, DetailsRoutingModule, MatCardModule, MatButtonModule,
    MatIconModule, MatTabsModule, MatFormFieldModule, MatInputModule, CommentModule, CartAddModule, QRCodeModule
  ],
  entryComponents: [DetailsComponent],
  exports: [DetailsComponent],
})
export class DetailsModule { }
