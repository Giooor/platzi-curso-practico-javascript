// HELPERS
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista=lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado+nuevoElemento;
        });
    const promedioLista=sumaLista/lista.length;
    return promedioLista;
}


// CALCULADORA DE MEDIANA
function medianaSalary(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2);

        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// MEDIANA GENERAL
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

//Ordenar de menor a mayor
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


const mediaGeneralCol = medianaSalary(salariosColSorted);

// MEDIANA TOP 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStart);
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10Col = medianaSalary(salariosColTop10);

console.log(
    mediaGeneralCol,
    medianaTop10Col,
)