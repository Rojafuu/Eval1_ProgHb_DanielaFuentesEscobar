import { Component, OnInit } from '@angular/core';
import { IonItem, IonInput, IonButton, IonList } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Circulo, FiguraGeometrica } from '../modelo/FigurasGeometricas';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonList,IonItem, IonInput, FormsModule]
})
export class CirculoComponent  implements OnInit {
  PerimetroStr: string ="";
  resultado: string ="";
  constructor() { }

  ngOnInit() {}


  CalcularPerimetro() {
    const PerimetroStr = parseInt(this.PerimetroStr)
    const FigurasGeometricas = new Circulo (PerimetroStr)
    const perimetro = FigurasGeometricas.calcularPerimetro()
    this.resultado = `El perimetro es ${perimetro} cm`
    }
    
  }
