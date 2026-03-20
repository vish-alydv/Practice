// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     },
// };


// const karanArjun = {
//     salary: 6000,
//     calcTax() {
//         console.log("Tax Rate is 20%");
//     },
// };


// karanArjun.__proto__ = employee;


// class ToyotaCar {
//     constructor(brand,milage) {
//         console.log("Creating New Objects");
//         this.brand=brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("Car Started");
//     }
//     stop(){
//         console.log("Car Stop");
//     }
//     // setBrand(brand){
//     //     this.brand=brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",12);
// console.log(lexus);



// class Person {
//     constructor() {
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("Do Nothing");
//     }
// }

// class Engineer extends Person {
//     work(){
//         console.log("Slove Problem,Build Something");
//     }
// }
// class Doctor extends Person {
//     work(){
//         console.log("Treats Patients");
//     }
// }



class Person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("Eat");
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
    }
    work(){
        super.eat();
        console.log("Slove Problem,Build Something");
    }
}
