import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },

    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },

            {
                path: 'wines',
                loadChildren: () => import('../wine/list/wine-list.module').then(m => m.WineListModule),
            },

            {
                path: 'champagnes',
                loadChildren: () => import('../champagne/list/champagne-list.module').then(m => m.ChampagneListModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
