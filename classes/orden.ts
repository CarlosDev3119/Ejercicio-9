import { Cafe } from "./cafe";


export class Orden extends Cafe{
    public uid:number

    constructor(
        tipoCafe: string,
        cantidad: number,
        precio: number,
        
    ){
      super(tipoCafe, cantidad, precio);
      this.uid = new Date().getTime();
    }

    public crearOrden() {
        return {
            id: this.uid,
            ...this
        }
    }

    get getPedido(){
        return super.getFullOrdenCafe()+` y el id de la orden es ${this.uid}`;
    }


}


