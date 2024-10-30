const prompt = require("prompt-sync")({ sigint: true });
console.log("Este programa calcula el total a pagar por el servicio de Rental Car ")
function rentalCar(string_tipoDeVehiculo, int_diasDeAlquiler, boolean_sillaParaBebe){

let valorDiario=0;
switch (string_tipoDeVehiculo) {
    case "Compacto":
        valorDiario=14000;
        break;
    case "Mediano":
        valorDiario=17000;
        break;
    case "Camioneta":
        valorDiario=28000;
        break;
    default:
        return;
}

let totalAPagar=+(valorDiario*int_diasDeAlquiler);
if(boolean_sillaParaBebe=="si"){
    totalAPagar+=(int_diasDeAlquiler*1200);

    console.log(`Estimado cliente,  en base al tipo de vehículo ${string_tipoDeVehiculo} alquilado, considerando los ${int_diasDeAlquiler} días utilizados, y al uso de la silla para bebés, el monto total a pagar es de $ ${totalAPagar}  `);
}
else{
    console.log(`Estimado cliente,  en base al tipo de vehículo ${string_tipoDeVehiculo} alquilado, considerando los ${int_diasDeAlquiler} días utilizados, el monto total a pagar es de $ ${totalAPagar}  `);
}

}
let tipo=prompt("que tipo de vehiculo ha rentado? ")
let dias=parseInt(prompt("Cuantos dias lo ha rentado? "))
let sillita= prompt("Si ha usado silla para bebés escriba ´si´ , caso contrario escriba ´no´ ")

rentalCar(tipo, dias, sillita);

