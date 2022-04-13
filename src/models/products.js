import { Medias } from "./collections";

export class products{
    
    link
    meta
    data
    
    constructor(link, meta, data) {
        this.link = link ?? new Link();
        this.meta = meta ?? new Meta();
        this.data = data ?? [];
    }
    fromJson(json) {

        this.link = json['link'] != null ? this.link.fromJson(json['link']) : new Link();
        this.meta = json['meta'] != null ? this.meta.fromJson(json['meta']) : new Meta();
        if (json['data'] != null) {
            for (let index = 0; index < json['data'].length; index++) {
                let d = new Data();

                d.fromJson(json['data'][index]);

                this.data.push(d);
            }
        }

    }
}

export class Data{

    id
    name
    description
    stocks
    infinite_stocks
    editable
    available
    price
    discounted_price
    comparaison_price
    slug
    code
    company_id
    created_at
    updated_at
    avg_reviews
    total_reviews
    medias

    tags
    variants
    collections

    constructor(    id, name, description,stocks,infinite_stocks,editable,
         available,price,discounted_price,comparaison_price,slug,code,
         company_id,created_at,updated_at,avg_reviews,total_reviews,medias,tags,variants,collections)
        {
            this.id = id;
            this.name =name??"";
            this.description =description??"";
            this.stocks =stocks;
            this.infinite_stocks =infinite_stocks;
            this.editable =editable;
            this.available =available;
            this.price = price;
            this.discounted_price = discounted_price;
            this.comparaison_price = comparaison_price;
            this.slug = slug;
            this.code = code;
            this.company_id = company_id ;
            this.created_at = created_at;
            this.updated_at = updated_at;
            this.avg_reviews = avg_reviews;
            this.total_reviews = total_reviews;
            this.medias = medias ?? [];
            this.tags = tags??[];
            this.variants = variants??[]
            this.collections =  collections??[];

        }
    fromJson(json){
        this.id =  json['id'];
        this.name =  json['name'];
        this.description =  json['description']??"";
        this.stocks =  json['stocks'];
        this.infinite_stocks =  json['infinite_stocks'];
        this.editable =  json['editable'];
        this.available =  json['available'];
        this.price =  json['price'];
        this.discounted_price =  json['discounted_price'];
        this.comparaison_price =  json['comparaison_price'];
        this.slug =  json['slug'];
        this.code =  json[' code'];
        this.company_id =  json['company_id'] ;
        this.created_at =  json['created_at'];
        this.updated_at =  json['updated_at'];
        this.avg_reviews =  json['avg_reviews'];
        this.total_reviews =  json['total_reviews'];
        if (json['medias'] != null) {

            for (let index = 0; index < json['medias'].length; index++) {
                let m = new Medias();

                m.fromJson(json['medias'][index]);

                this.medias.push(
                    m
                )


            }

        }
        if (json['tags'] != null) {

            for (let index = 0; index < json['tags'].length; index++) {
                let m = new Tags();

                m.fromJson(json['tags'][index]);

                this.tags.push(
                    fromJson(m)
                )


            }

        }
        if (json['variants'] != null) {

            for (let index = 0; index < json['variants'].length; index++) {
                let m = new Variants();

                m.fromJson(json['variants'][index]);

                this.variants.push(
                    m
                )


            }

        }
        if (json['collections'] != null) {

            for (let index = 0; index < json['collections'].length; index++) {

                m= json['collections'][index];

                this.medias.push(
                    m
                )


            }

        }

    }
}

class Tags{
    id
    name
    description
    constructor(id,name,description){
        this.id = id;
        this.name = name;
        this.description = description;
    }

    fromJson(json){
        this.id =  json['id'];
        this.name =  json['name'];
        this.description =  json['description'];

    }

}
class Variants{
    
    name
    slug
    description
    required
    max_choices
    options
    constructor(name, slug,description,required, max_choices,options){
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.required = required;
        this.max_choices = max_choices;
        this.options = options??[];
    }

    fromJson(json){
        this.name = json['name'];
        this.slug = json['slug'];
        this.description = json['description'];
        this.required = json['required'];
        this.max_choices = json['max_choices'];
        if (json['options'] != null) {

            for (let index = 0; index < json['options'].length; index++) {
                let m = new Option();
                m= json['options'][index];
                
                this.medias.push(
                    m
                )


            }

        }
        



    }

}

class Option{
    id
    name
    image
    price
    stocks
    description
    additionnal_fee
    constructor(id,name,image,price,stocks,description,additionnal_fee){
        id = id;
        name = name;
        image = image;
        price = price;
        stocks = stocks;
        description = description;
        additionnal_fee = additionnal_fee;

    }

}
