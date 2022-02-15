import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent],
  imports: [CommonModule, AnimaisRoutingModule, HttpClientModule],
})
export class AnimaisModule {}
