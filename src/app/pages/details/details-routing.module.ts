import { DetailsComponent } from './details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: ':dataNameStr/:id',
        component: DetailsComponent,
        data: { title: 'Részletek - Vitis Riparia' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DetailsRoutingModule { }
