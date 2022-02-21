import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampagneListComponent } from './champagne-list.component';

const routes: Routes = [
    {
        path: '',
        component: ChampagneListComponent,
        data: { title: 'Pezsgők - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChampagneListRoutingModule { }
