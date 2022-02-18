import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesComponent } from './acoes.component';
import { CardAcoesComponent } from './card-acoes/card-acoes.component';

@NgModule({
  declarations: [AcoesComponent, CardAcoesComponent],
  imports: [CommonModule, AcoesRoutingModule, SharedModule, HttpClientModule],
})
export class AcoesModule {}
