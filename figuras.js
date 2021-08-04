// Código del cuadrado
console.group('Cuadrados') // creamos un grupo de mensajes
// const ladoCuadrado = 5
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')

function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado
}
console.groupEnd()

// Código del triángulo
console.group('Tríangulos')
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const ladoTrianguloB = 4
// console.log(
//     'Los lados del triángulo miden ' 
//     + ladoTriangulo1 
//     + 'cm, ' 
//     + ladoTriangulo2 
//     + 'cm, ' 
//     + ladoTrianguloB 
//     + 'cm'
// )

// const alturaTriangulo = 5.5
// console.log('La altura del tríangulo es de: ' + alturaTriangulo + 'cm')

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
// const areaTriangulo = (ladoTrianguloB * alturaTriangulo) / 2 // Con los parentesis indicamos que esa operacion s resueve primero
console.groupEnd()

// Código del círculo
console.group('Círculo')
// Diámetro
function diametroCirculo(radio) {
    return radio * 2
}

// PI
// const PI = 3.1416
const PI = Math.PI // Calculamos Pi con Math
console.log('PI es: ' + PI)

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI
}

// Área
function areaCirculo(radio, ) {
    return (radio * radio) * PI
}
console.groupEnd()

// Interactuamos con el HTML

function calcularPerimetroCuadrado()  {
    const input = document.getElementById('InputCuadrado') // Capturamos nodo
    const value = input.value // Capturamos el valor del nodo
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado()  {
    const input = document.getElementById('InputCuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}