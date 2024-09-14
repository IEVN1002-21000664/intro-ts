interface puntos{
    x: number;
    y: number;
}
class Punto{
    x: number;
    y: number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
const punto1 = new Punto(1,2)
const punto2 = new Punto(4,6)

function calcularDistancia(a:puntos, b:puntos){
    const distancia = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

   console.log(`La distancia entre (${a.x},${a.y}) y (${b.x},${b.y}) es: ${distancia}`)
}

calcularDistancia(punto1, punto2)
