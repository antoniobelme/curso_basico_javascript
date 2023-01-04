// construcción de un objeto
var miAuto ={
    marca:"Toyota",
    modelo:"Corolla",
    annio:2020,
    detalleAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
} 

// función constructura
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model x", 2020);


//Reto
export function solution(car) {
    if(car.hasOwnProperty('licensePlate')){
        car.drivingLicense = true;
        console.log(car);
    } else {
        car.drivingLicense = false;
        console.log(car);
    }
  }

  //Reto

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
var autos= [];

for (var i = 0; i < 3; i++){
        var marca = prompt("Marca del auto:");
        var modelo = prompt("Modelo del auto:");
        var annio = prompt("Año del auto:");
        var autoL = new auto(marca, modelo, annio);
        autos.push(autoL);
        console.log(autos[i]);
    }

