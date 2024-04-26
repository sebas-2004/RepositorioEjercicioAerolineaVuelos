const readlineSync = require('readline-sync');

class Pasajero {
    constructor(nombre, edad, destino) {
        this.nombre = nombre;
        this.edad = edad;
        this.destino = destino;
    }

    calcularImpuestos() {
        
        return this.edad * 1000; 
    }
}

class Vuelo {
    constructor(destino, origen, costo, pasajeros = [], mascotas = 0) {   // array vacio 
        this.destino = destino;
        this.origen = origen;
        this.costo = costo;
        this.pasajeros = pasajeros;
        this.mascotas = mascotas;
    }

    agregarPasajero(pasajero) {
        this.pasajeros.push(pasajero);  //utiliza para agregar un nuevo elemento al final de un array.
    }

    calcularImpuestosMascotas() {
        
        return this.mascotas * 10000;     //acceder a las propiedades y métodos de un objeto.
    }

    contarInfantes() {
        return this.pasajeros.filter((pasajero) => pasajero.edad <= 12).length;  //filter se utiliza para crear un nuevo array, length se utiliza para obtener el tamaño del nuevo array creado por la función
    }

    calcularImpuestosPorDestino(destino) {
        const pasajerosDestino = this.pasajeros.filter((pasajero) => pasajero.destino === destino);
        return pasajerosDestino.reduce((total, pasajero) => total + pasajero.calcularImpuestos(), 0);
    }
}


const pasajero1 = new Pasajero('Juan', 5, 'San Andrés');
const pasajero2 = new Pasajero('María', 30, 'Cartagena');
const pasajero3 = new Pasajero('carlos', 20, 'San Andrés');

const vueloInfantes = new Vuelo('San Andrés', 'Bogotá', 500000, [pasajero1, pasajero2, pasajero3], 2);

const totalImpuestosMascotas = vueloInfantes.calcularImpuestosMascotas();
console.log(`Dinero recaudado por transporte de mascotas: $${totalImpuestosMascotas}`);

const cantidadInfantes = vueloInfantes.contarInfantes();
console.log(`Cantidad de infantes: ${cantidadInfantes}`);

const vuelos = [
    new Vuelo('San Andrés', 'Bogotá', 500000, [pasajero1, pasajero2,pasajero3], 2),
    new Vuelo('Cartagena', 'Medellín', 400000, [], 0)
];

const totalRecaudado = vuelos.reduce((total, vuelo) => total + vuelo.costo, 0);
console.log(`Valor total recaudado por concepto de venta de tiquetes: $${totalRecaudado}`);

const destinosFrecuentes = {};

vuelos.forEach((vuelo) => {
    if (destinosFrecuentes[vuelo.destino]) {
        destinosFrecuentes[vuelo.destino]++;
    } else {
        destinosFrecuentes[vuelo.destino] = 1;
    }
});

const destinoPreferido = Object.keys(destinosFrecuentes).reduce((a, b) =>
    destinosFrecuentes[a] > destinosFrecuentes[b]? a : b
);

console.log(`Destino preferido de las personas: ${destinoPreferido}`);

const totalImpuestosPorDestino = vueloInfantes.calcularImpuestosPorDestino(destinoPreferido);
console.log(`Total de impuestos para el destino preferido: $${totalImpuestosPorDestino}`);

const totalDulcesInfantes = vueloInfantes.contarInfantes() * 5000;
console.log(`Costo total de los dulces brindados a los infantes: $${totalDulcesInfantes}`);

