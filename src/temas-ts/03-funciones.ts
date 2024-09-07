//funciones
 
function sumar(){
    var num1 = 6
    var num2 = 6
 
    var resultado = num1 + num2;

    console.log(`El resultado es: ${resultado}`)
}
 
function restar(a:number, b:number):number{
    return a-b;
}
 
const res = restar (10,5);
 
console.log(res)
 
interface Mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
 
}
 
function calcular(mascotas:Mascotas, x:number):void {
    mascotas.edad += x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());

}
 
 
const nuevaMascota: Mascotas={
    nombre: "Miau",
    edad: 5,
    mostrarEdad(){
        console.log(`La edad de ${nuevaMascota.nombre} es ${this.edad}`)
    }
}
 
calcular(nuevaMascota, 4)