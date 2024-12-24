import { Component, OnInit } from '@angular/core';
import { IonItem, IonInput, IonButton, IonList } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../modelo/FigurasGeometricas';  

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonInput, FormsModule]
})
export class TrianguloComponent implements OnInit {
  PerimetroStr: string = "";  // Lado A
  PerimetroStr1: string = ""; // Lado B
  PerimetroStr2: string = ""; // Lado C
  resultado: string = "";

  constructor() { }

  ngOnInit() { }


  CalcularPerimetro() {

    const ladoA = parseFloat(this.PerimetroStr); 
    const ladoB = parseFloat(this.PerimetroStr1);
    const ladoC = parseFloat(this.PerimetroStr2);


    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
      this.resultado = "Por favor ingrese valores válidos para todos los lados del triángulo.";
      return;
    }


    const triangulo = new Triangulo(ladoA, ladoB, ladoC);
    const perimetro = triangulo.calcularPerimetro();

  
    this.resultado = `El perímetro del triángulo es ${perimetro} cm.`;
  }
}
