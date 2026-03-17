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


class ToyotaCar {
    constructor(brand,milage) {
        console.log("Creating New Objects");
        this.brand=brand;
        this.milage = milage;
    }
    start(){
        console.log("Car Started");
    }
    stop(){
        console.log("Car Stop");
    }
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

let fortuner = new ToyotaCar("fortuner",10);
console.log(fortuner);
let lexus = new ToyotaCar("lexus",12);
console.log(lexus);