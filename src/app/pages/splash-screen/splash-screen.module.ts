import { ChampagneCardModule } from './../champagne/card/champagne-card.module';
import { WineCardModule } from './../wine/card/wine-card.module';
import { ContainerModule } from './../../shared/components/container/container.module';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { OnHoverModule } from './../../shared/directives/on-hover/on-hover.module';
import { SplashScreenComponent } from './splash-screen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule, SplashScreenRoutingModule, OnHoverModule, ContainerModule, Ng2SearchPipeModule, WineCardModule,
    ChampagneCardModule, FormsModule, MatSelectModule
  ],
  exports: [SplashScreenComponent]
})
export class SplashScreenModule { }
