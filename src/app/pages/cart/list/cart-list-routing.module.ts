import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list.component';

const routes: Routes = [
    {
        path: '',
        component: CartListComponent,
        data: { title: 'Kosár - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CartListRoutingModule { }
