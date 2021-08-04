function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000
// ]

function esPar(numero) {
    if (numero % 2 === 0) { // Si el nuemero dividido entre 2 no da un residuo es par
        return true
    } else {
        return false
    }
}

function calcularMediana(listaM) {
    const mitadListaM = parseInt(listaM.length / 2) 
    let mediana
    
    if (esPar(listaM.length)) {
        const elemento1 = listaM[mitadListaM - 1]
        const elemento2 = listaM[mitadListaM]
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2])
    
        mediana = promedioElemento1y2
    } else {
        mediana = listaM[mitadListaM]
    }

    return mediana
}