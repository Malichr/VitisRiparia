import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
  },

  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
  },

  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/list/cart-list.module').then(m => m.CartListModule),
  },

  {
    path: 'orderAdd',
    loadChildren: () => import('./pages/order/add/order-add.module').then(m => m.OrderAddModule),
  },

  {
    path: 'order',
    loadChildren: () => import('./pages/order/list/order-list.module').then(m => m.OrderListModule),
    canActivate: [AuthGuard]

  },

  {
    path: 'orders',
    loadChildren: () => import('./pages/order/orders/orders.module').then(m => m.OrdersModule)
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
