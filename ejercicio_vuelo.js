class Vuelo {
    constructor(origen, destino, costo, impuesto, costoMascota = 0, esPromocion = false) {
        this.origen = origen;
        this.destino = destino;
        this.costo = costo;
        this.impuesto = impuesto;
        this.costoMascota = costoMascota;
        this.esPromocion = esPromocion;
    }

    calcularCostoFinal() {
        let costoFinal = this.costo + (this.costo * this.impuesto);
        if (this.esPromocion) {
            costoFinal -= costoFinal * 0.10;
        }
        return costoFinal + this.costoMascota;
    }
}

class Aerolinea {
    constructor() {
        this.vuelos = [];
        this.infantes = 0;
        this.costoDulces = 0;
        this.destinos = {};
        this.recaudacionMascotas = 0;
    }

    agregarVuelo(vuelo) {
        this.vuelos.push(vuelo);
        this.destinos[vuelo.destino] = (this.destinos[vuelo.destino] || 0) + 1;
        this.recaudacionMascotas += vuelo.costoMascota;
    }

    agregarInfante() {
        this.infantes++;
        this.costoDulces += 10; 
    }

    calcularRecaudacion() {
        let total = 0;
        for (let vuelo of this.vuelos) {
            total += vuelo.calcularCostoFinal();
        }
        return total;
    }

    calcularImpuestosPorDestino(destino) {
        let total = 0;
        for (let vuelo of this.vuelos) {
            if (vuelo.destino === destino) {
                total += vuelo.costo * vuelo.impuesto;
            }
        }
        return total;
    }

    destinoPreferido() {
        let max = 0;
        let destinoPreferido = '';
        for (let destino in this.destinos) {
            if (this.destinos[destino] > max) {
                max = this.destinos[destino];
                destinoPreferido = destino;
            }
        }
        return destinoPreferido;
    }
}