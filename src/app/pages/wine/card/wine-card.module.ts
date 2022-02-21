import { WineDeleteModule } from './../delete/wine-delete.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineCardComponent } from './wine-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';

@NgModule({
  declarations: [
    WineCardComponent
  ],
  imports: [
    CommonModule, OnHoverModule, WineDeleteModule
  ],
  exports: [WineCardComponent],
  entryComponents: [WineCardComponent]
})
export class WineCardModule { }
