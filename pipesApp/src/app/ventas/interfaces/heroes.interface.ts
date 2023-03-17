export enum Color {
    rojo, 
    verde, 
    azul, 
    negro, 
    blanco
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}