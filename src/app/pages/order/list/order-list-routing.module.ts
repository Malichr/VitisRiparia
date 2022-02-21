import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list.component';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent,
        data: { title: 'Rendelések - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderListRoutingModule { }
