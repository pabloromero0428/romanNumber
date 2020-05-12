import { Component } from '@angular/core';
import { RomanNumericService } from './services/roman-numeric.service'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartesting';
  public valor: string ;
  public result = '';

  constructor(private RomanServices: RomanNumericService) { }

  numRoman() {
    var valorNum = parseInt(this.valor);
    if (valorNum > 1000 || valorNum == 0 ) {
      Swal.fire({
        title: 'Rango incorrecto',
        text: `Has digitado un valor en el rango incorrecto`,
        icon: 'error',
      })
    } else {
      if (!this.valor) {
        Swal.fire({
          title: 'No has convertido un número',
          text: `Por favor ingrese un número del 1 al 1000 en el campo`,
          icon: 'error',
        })
      } else {
        {
          this.result = this.RomanServices.roman(valorNum);
          console.log(valorNum);
          Swal.fire({
            title: 'Has convertido un número',
            text: `El número ${valorNum} en romano es ${this.result}`,
            icon: 'success',
          });

        }
      }
    }
    this.valor = "";

  }
  soloNumero(evt) {
    var keynum;
    if (window.event) {
      keynum = evt.keyCode;
    } else {
      keynum = evt.which;
    }
    if (keynum > 47 && keynum < 58 || keynum == 8 || keynum == 13) {
      return true;
    } else {
      return false;
    }

  }
}
