import { MessageModule } from './../message/message.module';
import { ContainerModule } from './../../../shared/components/container/container.module';
import { OrderAddRoutingModule } from './order-add-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './order-add.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    OrderAddComponent
  ],
  imports: [
    CommonModule, OrderAddRoutingModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule,
    ContainerModule, MessageModule, MatDialogModule
  ],
  entryComponents: [OrderAddComponent
  ],
  exports: [OrderAddComponent
  ],
})
export class OrderAddModule { }
