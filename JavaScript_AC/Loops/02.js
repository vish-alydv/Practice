let str ="Vishal";

// for(let i of str){
//     console.log("i=",i)
// }


// let size = 0;
// for (let val of str){
//     console.log("Val =",val);
//     size++
// }

// console.log("String Size = ",size);


let student = {
    name:"Vishal",
    cgpa : 9,
    year : 1,


};

for (let key in student){
    console.log("Key", key ,"Value=" , student[key]);
}