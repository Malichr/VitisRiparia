import { OrderAddComponent } from './order-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: OrderAddComponent,
        data: { title: 'Rendelés hozzáadás - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderAddRoutingModule { }
