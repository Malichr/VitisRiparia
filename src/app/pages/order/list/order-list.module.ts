import { OrderListRoutingModule } from './order-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list.component';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { OrderCardModule } from '../card/order-card.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule, OrderListRoutingModule, ContainerModule, OrderCardModule, Ng2SearchPipeModule, FormsModule
  ],
  exports: [OrderListComponent],
  entryComponents: [OrderListComponent]
})
export class OrderListModule { }
