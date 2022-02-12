import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../model/transferencia';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number = 1;
  destino: number = 2;

  constructor(private service: TransferenciaService, private router: Router) {}

  ngOnInit(): void {}

  transferir() {
    let transferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adiciona(transferencia).subscribe(
      () => {
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limparCampo() {
    this.valor = 0;
    this.destino = 0;
  }
}
