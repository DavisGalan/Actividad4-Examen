import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-tipo',
  templateUrl: './registro-tipo.component.html',
  styleUrls: ['./registro-tipo.component.css']
})
export class RegistroTipoComponent implements OnInit {

  tipoRegistro: any={
    conductor: null,
    empresa: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
