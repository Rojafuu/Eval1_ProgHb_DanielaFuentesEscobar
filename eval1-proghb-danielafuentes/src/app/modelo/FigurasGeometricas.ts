export abstract class FiguraGeometrica {
    abstract calcularPerimetro(): number;
  }
  export class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    calcularPerimetro(): number {
      return 2 * Math.PI * this.radio;
    }
  }
  export class Triangulo extends FiguraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;
  
    constructor(ladoA: number, ladoB: number, ladoC: number) {
      super();
      this.ladoA = ladoA;
      this.ladoB = ladoB;
      this.ladoC = ladoC;
    }
  
    calcularPerimetro(): number {
      return this.ladoA + this.ladoB + this.ladoC;
    }
  }
    

  