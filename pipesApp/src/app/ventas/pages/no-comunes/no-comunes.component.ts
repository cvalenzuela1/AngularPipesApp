import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';

import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  // Observable
  miObservable = interval(1000);

  // i18nSelect
  clienteNombre: string = "";
  clienteGenero: string = "";

  clientes: Cliente[] = [
    {
      nombre: "Camilo",
      genero: "masculino"
    },
    {
      nombre: "Carla",
      genero: "femenino"
    },
    {
      nombre: "Juan",
      genero: "masculino"
    },
    {
      nombre: "Isabella",
      genero: "femenino"
    }
  ]
  
  invitarMap = {
    "masculino": "invitarlo",
    "femenino": "invitarla",
  }

  // i18nPlural
  clientesMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos dos clientes esperando.",
    "other": "tenemos # clientes esperando.",
  }

  // Other pipes
  persona = {
    nombre: "Fernando",
    edad: 35,
    direccion: "Ottawa, Canadá"
  }

  constructor() { 
    this.miObservable.subscribe();
  }

  ngOnInit(): void {
    this.cambiarCliente();
  }

  cambiarCliente(): void {
    if (this.clienteNombre.trim().length == 0 || this.clienteGenero.trim().length == 0 ) {
      this.clienteNombre = this.clientes[0].nombre;
      this.clienteGenero = this.clientes[0].genero;
    }
    else {
      let index = this.clientes.findIndex(element => element.nombre === this.clienteNombre);
      // debugger;
      if (index+1 < this.clientes.length) {
        this.clienteNombre = this.clientes[index+1].nombre;
        this.clienteGenero = this.clientes[index+1].genero;
      }
      else {
        if (this.clientes.length > 0) {
          this.clienteNombre = this.clientes[0].nombre;
          this.clienteGenero = this.clientes[0].genero;
        }
        else {
          this.clienteNombre = "";
          this.clienteGenero = "";
        }
      }
    }
  }

  borrarCliente(): void {
    if (this.clientes.length > 0) {
      let index = this.clientes.findIndex(element => element.nombre === this.clienteNombre);
      this.clientes.splice(index, 1);
      this.cambiarCliente();
    }
  }

}
