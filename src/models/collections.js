import { Link, Meta } from "./paginations";

export class Collections {
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





class Data {
    id
    name
    description
    parent_collection_id
    created_at
    updated_at
    company_id
    total_products
    medias

    constructor(
        id, name, description, parent_collection_id, created_at, updated_at, company_id, total_products, medias
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.parent_collection_id = parent_collection_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.company_id = company_id;
        this.total_products = total_prducts;
        this.medias = medias ?? [];
    }
    //machine learning
    fromJson(json) {

        this.id = json['id'];
        this.name = json['name'];
        this.description = json['description'];
        this.parent_collection_id = json['parent_collection_id'];
        this.created_at = json['created_at'];
        this.updated_at = json['updated_at'];
        this.company_id = json['company_id'];
        this.total_products = json['total_products'];
        if (json['medias'] != null) {

            for (let index = 0; index < json['medias'].length; index++) {
                let m = new Medias();

                m.fromJson(json['medias'][index]);

                this.medias.push(
                    m
                )


            }

        }

    }
}

export class Medias {
    link
    collection_name
    collection
    thumb
    constructor(link, collection_name, collection,thumb) {
        this.link = link;
        this.collection_name = collection_name;
        this.collection = collection ?? new Collection();
        this.thumb = thumb;
    }

    fromJson(json) {

        this.link = json['link'];
        this.collection_name = json['collection_name'];
        if (json['collection'] != null) {

            let c = new Collection();

            c.fromJson(json['collection']);

            this.collection = c;
        }
        this.thumb = json['thumb'];

    }
}

class Collection {

    id
    name
    description
    entreprise_id
    created_at
    updated_at

    constructor(id, name, description, entreprise_id, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.entreprise_id = entreprise_id;
        this.created_at = created_at;
        this.updated_at = updated_at;

    }

    fromJson(json) {

        this.id = json['id'];
        this.name = json['name'];
        this.description = json['description'];
        this.entreprise_id = json['entreprise_id'];
        this.created_at = json['created_at'];
        this.updated_at = json['updated_at'];
    }
}


