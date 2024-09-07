interface Alumno {
    nombre: string,
    apellido: string,
    edad: number,
    curso: string,
    direccion?: string|null
}
const alumno:Alumno = {
    nombre: 'Juan',
    apellido: 'Lopez',
    edad: 22,
    curso: "Ingles",
}
console.table(alumno)

let mascotas = ['perro','gato','perico']

console.log(mascotas[0])
mascotas[1]= 'nuevo gato'
mascotas.push('hamster')

console.log(mascotas)

let tem:(number|string)[]=[]
tem.push(1)
tem.push('dos')
console.log(tem)