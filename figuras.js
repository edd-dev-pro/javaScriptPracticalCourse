// Código del cuadrado
console.group('Cuadrados') // creamos un grupo de mensajes
const ladoCuadrado = 5
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')

const perimetroCuadrado = ladoCuadrado * 4
console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm')

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2')
console.groupEnd()

// Código del triángulo
console.group('Tríangulos')
const ladoTriangulo1 = 6
const ladoTriangulo2 = 6
const ladoTrianguloB = 4
console.log(
    'Los lados del triángulo miden ' 
    + ladoTriangulo1 
    + 'cm, ' 
    + ladoTriangulo2 
    + 'cm, ' 
    + ladoTrianguloB 
    + 'cm'
)

const alturaTriangulo = 5.5
console.log('La altura del tríangulo es de: ' + alturaTriangulo + 'cm')

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloB
console.log ('El perímetro del tríangulo es: ' + perimetroTriangulo + 'cm')

const areaTriangulo = (ladoTrianguloB * alturaTriangulo) / 2 // Con los parentesis indicamos que esa operacion s resueve primero
console.log('El área del tríangulo es: ' + areaTriangulo + 'cm^2')
console.groupEnd()

// Código del círculo
console.group('Círculo')

// Radio
const radioCirculo = 4
console.log('El radio del círculo es: ' + radioCirculo + 'cm')

// Diámetro
const diametroCirculo = radioCirculo * 2
console.log('El díametro del círculo es: ' + diametroCirculo + 'cm')

// PI
// const PI = 3.1416
const PI = Math.PI // Calculamos Pi con Math
console.log('PI es: ' + PI)

// Circunferencia
const perimetroCirculo = diametroCirculo * PI
console.log('El perímetro del círculo es: ' + perimetroCirculo + 'cm')

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log('El área del círculo es: ' + areaCirculo + 'cm^2')
console.groupEnd()