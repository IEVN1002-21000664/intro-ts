
export class Punto {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    
    calcularDistancia(otroPunto: Punto): number {
      const distancia = Math.sqrt(Math.pow(otroPunto.x - this.x, 2) + Math.pow(otroPunto.y - this.y, 2));
      return distancia;
    }
  }
const punto1 = new Punto(0, 0);
const punto2 = new Punto(3, 0);

console.log('Distancia punto 1 y 2: '+punto2.calcularDistancia(punto1))
