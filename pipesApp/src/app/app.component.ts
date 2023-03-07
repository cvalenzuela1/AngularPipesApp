import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "CamiLo ValenZuELa";
  valor : number = 1000;

  mostrarNombre(): void {
    console.log(this.nombre);
  }
}
