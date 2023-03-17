import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  mayusculasPipe: number = 2;
  ordenarPipe: string = "";

  heroes: Heroe[] = [
    {
      nombre: "Superman",
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: "Batman",
      vuela: false,
      color: Color.negro
    },
    {
      nombre: "Hulk",
      vuela: false,
      color: Color.verde
    },
    {
      nombre: "Frozono",
      vuela: false,
      color: Color.blanco
    },
    {
      nombre: "Capitán América",
      vuela: false,
      color: Color.azul
    },
  ]

  cambiar(): void {
    if ( this.mayusculasPipe < 2 ) {
      this.mayusculasPipe += 1;
    }
    else {
      this.mayusculasPipe = 0;
    }
  }

  sortPipes( pipe: string ): void {
    if ( pipe === "nombre" ) {
      this.ordenarPipe = "nombre";
    }
    else if ( pipe === "vuela" ) {
      this.ordenarPipe = "vuela";
    }
    else if ( pipe === "color" ) {
      this.ordenarPipe = "color";
    }
    else {
      this.ordenarPipe = "";
    }
  }
}
