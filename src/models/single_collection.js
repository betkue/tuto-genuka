import { Product_Single } from "./products";

export class SingleCollection{
    collection
    products
    constructor(collection , products){
        this.collection = collection?? new Collection();
        this.products = products?? new Products();

    }

    fromJson(json){
        this.collection = json['collection'] != null ? this.collection.fromJson(json['collection']) : new Collection();
        this.products = json['products'] != null ? this.products.fromJson(json['products']) : new Products() ;
    }
}

class Products {
    data
    pagination
    constructor(data,pagination){
        this.data = data?? [];
        this.pagination = pagination;

    }
    fromJson(json){
        this.pagination = json['pagination'] != null ? this.fromJson(json['pagination']) : new Pagination();
        if (json['data'] !=  null) {

            for (let index = 0; index < json['data'].length; index++) {
                const element = json['data'][index];
                let d = new Product_Single();

                d.fromJson(element);

                this.data.push(d);
            }
            
        }
    }

}

class Pagination{
    total
    count
    per_page
    current_page
    total_pages
    constructor(total,count,per_page,current_page,total_pages){
        this.total = total;
        this.count = count;
        this.per_page = per_page;
        this.current_page = current_page;
        this.total_pages = total_pages;

    }
    fromJson(json){
        this.total = json['total'];
        this.count = json['count'];
        this.per_page = json['per_page'];
        this.current_page = json['current_page'];
        this.total_pages = json['total_pages'];

    }
}



class Collection {

    id
    name
    description
    entreprise_id
    created_at
    updated_at
    parent_collection_id

    constructor(id, name, description, entreprise_id, created_at, updated_at,parent_collection_id) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.entreprise_id = entreprise_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.parent_collection_id = parent_collection_id;

    }

    fromJson(json) {

        this.id = json['id'];
        this.name = json['name'];
        this.description = json['description'];
        this.entreprise_id = json['entreprise_id'];
        this.created_at = json['created_at'];
        this.parent_collection_id = ['parent_collection_id'];
        this.updated_at = json['updated_at'];
    }
}


