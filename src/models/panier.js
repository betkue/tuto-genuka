


export class Panier{


    products
    constructor(products){
        this.products = products??[];
    }


}

export class Commande{
        id
        quantity
        price
        add_to_cart_date
        properties
}

export class Properties {
    complement
     note

     constructor(complement,note){
         this.complement = complement;
         this.note = note;
     }
    }