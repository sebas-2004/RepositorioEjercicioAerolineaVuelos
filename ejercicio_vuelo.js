const readlineSync = require('readline-sync');

class Vuelo {
    constructor(destino, origen, costo) {
        this.destino = destino;
        this.origen = origen;
        this.costo = costo;
        this.pasajeros = [];
    }

    agregarPasajero(pasajero) {
        this.pasajeros.push(pasajero);
    }
}

class Pasajero {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

// Ejemplo de uso:
const vuelo1 = new Vuelo('San Andrés', 'Bogotá', 500000);
const vuelo2 = new Vuelo('Cartagena', 'Medellín', 400000);

const vuelos = [vuelo1, vuelo2];

const totalRecaudado = vuelos.reduce((total, vuelo) => total + vuelo.costo, 0);
console.log(`Valor total recaudado: $${totalRecaudado}`);
const destinosFrecuentes = {};

vuelos.forEach((vuelo) => {
    if (destinosFrecuentes[vuelo.destino]) {
        destinosFrecuentes[vuelo.destino]++;
    } else {
        destinosFrecuentes[vuelo.destino] = 1;
    }
});

const destinoPreferido = Object.keys(destinosFrecuentes).reduce((a, b) =>
    destinosFrecuentes[a] > destinosFrecuentes[b] ? a : b
);

console.log(`Destino preferido: ${destinoPreferido}`);
class Vuelo {
    constructor(destino, origen, costo, mascotas) {
        this.destino = destino;
        this.origen = origen;
        this.costo = costo;
        this.mascotas = mascotas;
    }

    calcularImpuestosMascotas() {
        // Lógica para calcular impuestos por mascotas
        // (puede variar según las reglas de la aerolínea)
    }
}

// Ejemplo de uso:
const vueloConMascotas = new Vuelo('San Andrés', 'Bogotá', 500000, 2);
const vueloSinMascotas = new Vuelo('Cartagena', 'Medellín', 400000, 0);

const totalImpuestosMascotas = vueloConMascotas.calcularImpuestosMascotas() + vueloSinMascotas.calcularImpuestosMascotas();
console.log(`Dinero recaudado por transporte de mascotas: $${totalImpuestosMascotas}`);
class Vuelo {
    constructor(destino, origen, costo, pasajeros) {
        this.destino = destino;
        this.origen = origen;
        this.costo = costo;
        this.pasajeros = pasajeros;
    }

    contarInfantes() {
        return this.pasajeros.filter((pasajero) => pasajero.edad <= 12).length;
    }
}

// Ejemplo de uso:
const pasajero1 = new Pasajero('Juan', 5);
const pasajero2 = new Pasajero('María', 30);

const vueloInfantes = new Vuelo('San Andrés', 'Bogotá', 500000, [pasajero1, pasajero2]);

const cantidadInfantes = vueloInfantes.contarInfantes();
console.log(`Cantidad de infantes: ${cantidadInfantes}`);

