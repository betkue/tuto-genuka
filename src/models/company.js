

export    class Company {
    id
    name
    logo
    website
    currency
    contact
    slogan
    description
    shipping_fee
    phone
    email
    payment_modes
    constructor(id, name, logo, currency,contact,slogan,description,shipping_fee,phone,email,payment_modes) {
        this.id = id
        this.name = name??""
        this.logo = logo??""
        this.contact = contact??""
        this.description = description??""
        this.slogan = slogan ??""
        this.shipping_fee =shipping_fee??0
        this.phone =phone??""
        this.email=email??""
        this.payment_modes=payment_modes?? new Payment_modes()
        this.currency = currency != null? currency : new Currency()
    }

    fromJson(json) {

        this.id = json['id']
        this.name = json['name']
        this.logo = json['logo']
        this.website = json['website']
        this.description = json['description']
        this.slogan= json['slogan']
        this.contact= json['contact']
        this.shipping_fee =json['shipping_fee']
        this.phone =json['phone']
        this.email=json['email']
        this.payment_modes=json['payment_modes']
        this.currency = json['currency'] != null
            ? this.currency.fromJson(json['currency'])
            : new this.currency


    }
}
 
class Currency {
     name
     code
     symbol
    constructor(name, code, symbol) {
        this.name = name??""
        this.code = code??""
        this.symbol = symbol??""

    }
    fromJson(json) {

        this.name = json['name']
        this.code = json['code']
        this.symbol = json['symbol']


    }

}

class Payment_modes{
    constructor(){}
}




