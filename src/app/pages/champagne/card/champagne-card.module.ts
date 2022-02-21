import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampagneCardComponent } from './champagne-card.component';
import { OnHoverModule } from 'src/app/shared/directives/on-hover/on-hover.module';
import { ChampagneDeleteModule } from '../delete/champagne-delete.module';

@NgModule({
  declarations: [
    ChampagneCardComponent
  ],
  imports: [
    CommonModule, OnHoverModule, ChampagneDeleteModule
  ],
  exports: [ChampagneCardComponent],
  entryComponents: [ChampagneCardComponent]
})
export class ChampagneCardModule { }
