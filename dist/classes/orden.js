"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orden = void 0;
const cafe_1 = require("./cafe");
class Orden extends cafe_1.Cafe {
    constructor(tipoCafe, cantidad, precio) {
        super(tipoCafe, cantidad, precio);
        this.uid = new Date().getTime();
    }
    crearOrden() {
        return Object.assign({ id: this.uid }, this);
    }
    get getPedido() {
        return super.getFullOrdenCafe() + ` y el id de la orden es ${this.uid}`;
    }
}
exports.Orden = Orden;
