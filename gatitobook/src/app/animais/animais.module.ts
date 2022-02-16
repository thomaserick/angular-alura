import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';

@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradeFotosAnimaisComponent,
    DetalheAnimalComponent,
  ],
  imports: [CommonModule, AnimaisRoutingModule, HttpClientModule, CartaoModule],
})
export class AnimaisModule {}
