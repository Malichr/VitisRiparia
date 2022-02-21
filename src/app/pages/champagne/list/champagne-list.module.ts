import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampagneListComponent } from './champagne-list.component';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { ChampagneListRoutingModule } from './champagne-list-routing.module';
import { ChampagneCardModule } from '../card/champagne-card.module';
import { ChampagneAddModule } from '../add/champagne-add.module';
import { ChampagneUpdateModule } from '../update/champagne-update.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChampagneListComponent
  ],
  imports: [
    CommonModule, ChampagneListRoutingModule, ContainerModule, ChampagneCardModule, ChampagneAddModule, ChampagneUpdateModule,
    Ng2SearchPipeModule, FormsModule
  ]
})
export class ChampagneListModule { }
