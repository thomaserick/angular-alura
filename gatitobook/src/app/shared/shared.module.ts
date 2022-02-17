import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';

@NgModule({
  imports: [CommonModule, MensagemModule, ReactiveFormsModule],
  exports: [MensagemModule, ReactiveFormsModule],
})
export class SharedModule {}
