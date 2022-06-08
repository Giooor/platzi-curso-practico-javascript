function obtenerInputModa(){
    const datosModa = document.getElementById("calcular-moda").value;

    //Convertir string en array
    const arrayModa = datosModa.split(",");

    const objectModa = {};
    
    //Convertir array en objeto
    arrayModa.map(
        function(elemento){
            if (objectModa[elemento]){
                objectModa[elemento] += 1;
            } else {
                objectModa[elemento] = 1;
            }
        }
    );

    const moda = Object.entries(objectModa).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

   const resultado = moda[moda.length - 1];

   console.log("La moda es: " + resultado[0]);
}