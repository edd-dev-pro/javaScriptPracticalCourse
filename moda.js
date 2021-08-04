const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]
// const lista1 = ['manzana', 'platano', 'pera', 'naranja', 'platano', 'platano', 'naranja', 'naranja', 'naranja', 'naranja', 'pera']
const lista1Count = {}

lista1.map(
    function(elemento){
        // console.log(elemento)
        if (lista1Count[elemento]) { // preguntamos si este elemento ya esxiste en nuesto objeto 
            // lista1Count[elemento] // con esta linea de codigo creams una propiedad en el objeto vacio.
            // lista1Count[elemento] = lista1Count[elemento] + 1
            lista1Count[elemento] += 1
        } else {
            lista1Count[elemento] = 1
        }
    }
)

// const lista1Array = Object.entries(lista1Count) // A esta instruccion le podemos enviar como argumento el objeto que queremos combertir en un array
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
)

const moda = lista1Array[lista1Array.length - 1]

// =================
// ==== Consola ====
// =================
// = > Object.entries(lista1Count) // Este metodo nos permite apartir de un objeto crear un array, con arrays por dentro
// = <·  ▼(4) [Array(2), Array(2), Array(2), Array(2)]
// =     ▶ 0: (2) ["1", 3]
// =     ▶ 1: (2) ["2", 5]
// =     ▶ 2: (2) ["3", 2]
// =     ▶ 3: (2) ["4", 1]
// =       length: 4
// =     ▶ [[Prototype]]: Array(0)
// =================
// = >  lista1
// = <· ▶ (11) [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]
// =================
// = > Object.entries(lista1Count).sort() // El metodo sort nos ayuda a ordenar el array, pero no porl la jerarquia del string si no por el numero de veces que se muetra de menor a mayor.
// =================
// = > Object.entries(lista1Count).sort(
// =    function(elementoA, elementoB) {
// =     
// =      // if (elementoA > elementoB) return 1 - primero va el elementoB
// =      // if (elementoA == elementoB) return 0 - ?
// =      // if (elementoA < elementoB) return -1 - primero va el elementoA
// =
// =      // return elementoA - elementoB // Obtimizando el codigo de los if's
// =      return elementoA[1] - elementoB[1] // coloca el numero del indice porque es un array de arrays.
// = 
// =    } 
// =   )
// =================
// = <·  ▼(4) [Array(2), Array(2), Array(2), Array(2)]
// =     ▶ 0: (2) ["4", 1]
// =     ▶ 1: (2) ["3", 2]
// =     ▶ 2: (2) ["1", 3]
// =     ▶ 3: (2) ["2", 5]
// =       length: 4
// =     ▶ [[Prototype]]: Array(0)

// Investiga el metodo https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort