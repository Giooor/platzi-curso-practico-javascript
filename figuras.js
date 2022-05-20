//Código del cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5;

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado (lado){
    return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");
// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado (lado){
    return lado * lado;
}


//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();


//Código del triangulo
//console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/*console.log("Los lados del triangulo miden: "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo + "cm");
*/

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

//JavaScript ejecuta primero lo que este dentro del paréntesis en operaciones matemáticas
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del Circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;

// Diametro
//const diametroCirculo = radioCirculo * 2;
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;
}


//console.log("El radio del ciurculo es de: " + radioCirculo + "cm");
//console.log("El diameetro del ciurculo es de: " + diametroCirculo + "cm");
//console.log("El PI es: " + PI);
//console.log("El perimetro del ciurculo es de: " + perimetroCirculo + "cm");
//console.log("El area del ciurculo es de: " + areaCirculo + "cm2");



//console.groupEnd();


// Aquí interactuamos con html

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultado = document.getElementById("resultado");
    const value = input.value;

    const perimetro =  value * 4;
    resultado.innerHTML = ("El perimetro del cuadrado es: " + perimetro + " cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultado = document.getElementById("resultado");
    const value = input.value;

    const area =  value * value;
    resultado.innerHTML = ("El area del cuadrado es: " + area + " cm2");
}

// Triangulo
function calcularPerimetroTriangulo(){
    const resultado = document.getElementById("resultado-triangulo");
    const ladoUno = parseInt(document.getElementById("LadoUno").value);
    const ladoDos = parseInt(document.getElementById("LadoDos").value);
    const base = parseInt(document.getElementById("Base").value);

    const perimetro = ladoUno + ladoDos + base;
    resultado.innerHTML = ("El perimetro del triangulo es: " + perimetro + " cm");
}

function calcularAreaTriangulo(){
    const resultado = document.getElementById("resultado-triangulo-altura");
    const base = parseInt(document.getElementById("BaseTriangulo").value);
    const altura = parseInt(document.getElementById("AlturaTirangulo").value);

    const area = base * altura;
    resultado.innerHTML = ("El area del triangulo es: " + area + " cm2");
}

// Circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const resultado = document.getElementById("resultado-circulo");
    const value = input.value;

    const diametro =  value * 2;
    resultado.innerHTML = ("El diamtro del circulo es: " + diametro + " cm");
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const resultado = document.getElementById("resultado-circulo");
    const value = input.value;

    const PI = Math.PI;
    const diametro =  value * 2;
    const perimetro =  diametro * PI;
    resultado.innerHTML = ("El perimetro del circulo es: " + perimetro + " cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const resultado = document.getElementById("resultado-circulo");
    const value = input.value;

    const PI = Math.PI;
    const area =  (value * value) * PI;
    resultado.innerHTML = ("El area del circulo es: " + area + " cm");
}