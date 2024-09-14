class Punto {
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
  
  class Triangulo extends Punto {
    punto1: Punto;
    punto2: Punto;
    punto3: Punto;
  
    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
      this.punto1 = punto1;
      this.punto2 = punto2;
      this.punto3 = punto3;
    }
  
    esTriangulo(): boolean {
      const d1 = this.punto1.calcularDistancia(this.punto2);
      const d2 = this.punto2.calcularDistancia(this.punto3);
      const d3 = this.punto3.calcularDistancia(this.punto1);
  
      // la suma de dos lados debe ser mayor que el tercer lado
      return (d1 + d2 > d3) && (d2 + d3 > d1) && (d3 + d1 > d2);
    }
  }
  
  const punto1 = new Punto(0, 0);
  const punto2 = new Punto(3, 0);
  const punto3 = new Punto(0, 4);
  
  const triangulo = new Triangulo(punto1, punto2, punto3);
  
  // Calcular distancias
  console.log("Distancia entre punto1 y punto2:", punto1.calcularDistancia(punto2));
  console.log("Distancia entre punto2 y punto3:", punto2.calcularDistancia(punto3));
  console.log("Distancia entre punto3 y punto1:", punto3.calcularDistancia(punto1));
  
  // Verificar si forman un triángulo
  if (triangulo.esTriangulo()) {
    console.log("Los puntos forman un triángulo.");
  } else {
    console.log("Los puntos NO forman un triángulo.");
  }
  