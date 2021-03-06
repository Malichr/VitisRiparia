import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule, CommonModule, IonicModule.forRoot()
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
