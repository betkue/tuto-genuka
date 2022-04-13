import { User } from "./user"

export class UserAuth{
    user
    access_token
    constructor(user,access_token){
        this.user = user?? new User();
        this.access_token = access_token;
    }
    fromJson(json){
        this.user = json['user']?? new User();
        this.access_token = json['access_token'];

    }

}