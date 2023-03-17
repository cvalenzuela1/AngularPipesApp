import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform( value: string, isUppercase: number = 2): string {
    if ( isUppercase == 1 ) {
        return value.toLocaleUpperCase();
    }
    else if ( isUppercase == 0) {
        return value.toLocaleLowerCase();
    }
    else if ( isUppercase == 2 ) {
        return value.charAt(0).toLocaleUpperCase() + value.substring(1);
    }
    else {
        return value;
    }
    
  }

}
