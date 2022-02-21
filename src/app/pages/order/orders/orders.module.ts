import { ContainerModule } from './../../../shared/components/container/container.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule, OrdersRoutingModule, ContainerModule, Ng2SearchPipeModule, FormsModule
  ],
  entryComponents: [OrdersComponent
  ],
  exports: [OrdersComponent
  ],
})
export class OrdersModule { }
