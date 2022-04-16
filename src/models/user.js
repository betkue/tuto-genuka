
  export class  User {
      firstname
      lastname
      email
      tel
      sex
      birth_date
      orther
      updated_at
      created_at
      id

      constructor( firstname,lastname,email,tel,sex,birth_date,orther,updated_at,created_at,id){
        this.firstname = firstname??"";
        this.lastname =  lastname??"";
        this.email = email??"";
        this.tel = tel??"";
        this.sex = sex??"";
        this.birth_date = birth_date??"";
        this.orther = orther;
        this.updated_at = updated_at??"";
        this.created_at =  created_at??"";
        this.id = id??"";
      }

      fromJson(json){
          
            this.firstname = json['firstname']??"";
            this.lastname =  json['lastname']??"";
            this.email = json['email']??"";
            this.tel = json['tel']??"";
            this.sex = json['sex']??"";
            this.birth_date = json['birth_date']??"";
            this.orther = json['orther']??[];
            this.updated_at = json['updated_at']??"";
            this.created_at =  json['created_at']??"";
            this.id = json['id']??""  ;
      }
    }
    
