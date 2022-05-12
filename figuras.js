//Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


//Código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo + "cm");


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

//JavaScript ejecuta primero lo que este dentro del paréntesis en operaciones matemáticas
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2")

console.groupEnd();

//Código del Circulo
console.group("Circulos");

// Radio
const radioCirculo = 4;

// Diametro
const diametroCirculo = radioCirculo * 2;

// PI
const PI = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;


console.log("El radio del ciurculo es de: " + radioCirculo + "cm");
console.log("El diameetro del ciurculo es de: " + diametroCirculo + "cm");
console.log("El PI es: " + PI);
console.log("El perimetro del ciurculo es de: " + perimetroCirculo + "cm");
console.log("El area del ciurculo es de: " + areaCirculo + "cm2");



console.groupEnd();