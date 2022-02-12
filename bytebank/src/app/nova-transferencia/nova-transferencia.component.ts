import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number = 1;
  destino: number = 2;


  @Output() aoTransferir = new EventEmitter<any>();

  ngOnInit(): void {}

  transferir()
  {
    // console.log("Valor:" + this.valor);
    // console.log("Destino:" + this.destino);    

    let valorEmitir = {valor:this.valor,destino:this.destino};

    this.aoTransferir.emit(valorEmitir);
    
  }

}
