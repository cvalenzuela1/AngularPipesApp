import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styleUrls: ['./comunes.component.css']
})
export class ComunesComponent implements OnInit{
  
  nombreLowercase: string = "camilo valenzuela";
  nombreUppercase: string = "CAMILO VALENZUELA";
  nombreCompleto: string = "CaMiLo VaLeNzUeLa";

  countries: object = {
    esCL: "Chile",
    esAR: "Argentina"
  };

  fecha: Date = new Date();
  fecha_local: string = this.fecha.toLocaleDateString();

  locale: string = "";

  ngOnInit(): void {
    this.getCountryLocale();
  }

  getCountryLocale(): void {
    const locale_value = Intl.DateTimeFormat().resolvedOptions().locale;
    for (const valor of Object.entries(this.countries)) {  
      for (let i = 0; i < valor.length; i++) {
        const element = valor[0];
        if(i == 1 && locale_value.replace('-','') === element) {
          this.locale = valor[1];
          console.log(this.locale);
          break;
        }
      }
    }
  }
  
}
