var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];
// .filter()
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
})

//.map()
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

//.find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

//.forEach()
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//.some()
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})

//reto
function solution(cars) {
    var x = cars.find(function (car) {
      return car.licensePlate;
    });
    if (x){
        var y = cars.filter(function (car) {
            return car.licensePlate;
            });
    } else {
        return false;
    }
    return y;
} 
    
const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
 /*  solution(cars); */