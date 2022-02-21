import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRoutingModule } from './registration-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RegistrationRoutingModule, MatButtonModule, MatFormFieldModule,
    MatInputModule, MatChipsModule, MatIconModule
  ]
})
export class RegistrationModule { }
