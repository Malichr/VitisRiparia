import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineListComponent } from './wine-list.component';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WineCardModule } from '../card/wine-card.module';
import { WineListRoutingModule } from './wine-list-routing.module';
import { WineAddModule } from '../add/wine-add.module';
import { WineUpdateModule } from '../update/wine-update.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    WineListComponent
  ],
  imports: [
    CommonModule, WineListRoutingModule, ContainerModule, WineCardModule, WineAddModule, FormsModule, ReactiveFormsModule,
    WineUpdateModule, Ng2SearchPipeModule
  ]
})
export class WineListModule { }
