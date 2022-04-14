export class Link {
    first
    last
    prev
    next
    constructor(first, last, prev, next) {
        this.first = first;
        this.last = last;
        this.prev = prev;
        this.next = next;
    }

    fromJson(json) {
        this.first = json['first'];
        this.last = json['last'];
        this.prev = json['prev'];
        this.next = json['next'];

        return new Link(this.first,this.last,this.prev,this.next)
    }

}


export  class Meta {
    current_page
    from
    last_page
    path
    per_page
    to
    total

    constructor(current_page, from, last_page, path, per_page, to, total) {
        this.current_page = current_page;
        this.from = from;
        this.last_page = last_page;
        this.path = path;
        this.per_page = per_page;
        this.to = to;
        this.total = total;

    }

    fromJson(json) {

        this.current_page = json['current_page'];
        this.from = json['from'];
        this.last_page = json['last_page'];
        this.path = json['path'];
        this.per_page = json['per_page'];
        this.to = json['to'];
        this.total = json['total'];
        
        return new Meta(this.current_page, this.from, this.last_page, this.path, this.per_page, this.to, this.total)

    }
}
