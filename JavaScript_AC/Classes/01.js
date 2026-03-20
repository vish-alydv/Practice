let Data = "Set Of Information";


class User {
    constructor(name,email){
        this.name= name;
        this.email=email;
    }
    viewData(){
        console.log("Data",Data);
    }
}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        Data = "Some New Value";
    }
}

let Student1 = new User("Abc","Def");
let Student2 = new User("Ghi","Jkl");

let admin1 = new Admin("ads","pr");
