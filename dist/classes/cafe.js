"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cafe = void 0;
class Cafe {
    constructor(tipoCafe, cantidad, precio) {
        this.tipoCafe = tipoCafe;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    getFullOrdenCafe() {
        return `El cliente ordenó ${this.cantidad} tazas de ${this.tipoCafe} a $${this.precio} cada una`;
    }
}
exports.Cafe = Cafe;
