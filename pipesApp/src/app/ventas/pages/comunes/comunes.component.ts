import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styleUrls: ['./comunes.component.css']
})
export class ComunesComponent {
  nombreLowercase: string = "camilo valenzuela";
  nombreUppercase: string = "CAMILO VALENZUELA";
  nombreCompleto: string = "CaMiLo VaLeNzUeLa";
}
