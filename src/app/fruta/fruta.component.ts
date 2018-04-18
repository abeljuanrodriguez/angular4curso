import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  templateUrl: './fruta.component.html',
})
export class FrutaComponent {
  public nombreComponente = 'Componente de fruta';
  public listadoFrutas = 'Naranja, Manzana, Pera y Sandia';
}