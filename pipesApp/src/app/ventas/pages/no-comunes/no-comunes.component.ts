import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = "Camilo";
  genero: string = "masculino";

  invitarMap = {
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }

  // i18nPlural
  clientes: string[] = ["María","Juan","Pedro","Diego"];
  clientesMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos dos clientes esperando.",
    "other": "tenemos # clientes esperando.",
  }

}
