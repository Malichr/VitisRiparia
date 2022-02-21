import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineListComponent } from './wine-list.component';

const routes: Routes = [
    {
        path: '',
        component: WineListComponent,
        data: { title: 'Borok - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WineListRoutingModule { }
