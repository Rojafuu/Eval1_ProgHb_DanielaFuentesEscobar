import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonSelect, IonSelectOption, IonContent, IonItem, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonSelect, IonSelectOption, IonHeader, IonToolbar, IonTitle,CommonModule, IonContent,CirculoComponent,TrianguloComponent],
})
  
export class HomePage {
  tipoFigura:string =""

  constructor() {}
  esCirculo() { return this.tipoFigura == "circulo"}
  esTriangulo() { return this.tipoFigura == "triangulo"}
  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura= $event.detail.value
    }
}
