import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = "";

  constructor( private primeNgConfigService: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primeNgConfigService.ripple = true;
  }
}
