
export class Cafe {

    constructor(
        public tipoCafe: string,
        public cantidad: number,
        public precio: number
    ){

    }

    protected getFullOrdenCafe(): string {
        return `El cliente ordenó ${this.cantidad} tazas de ${this.tipoCafe} a $${this.precio} cada una`;
    }

}