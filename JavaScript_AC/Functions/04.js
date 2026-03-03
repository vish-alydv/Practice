// let marks = [34,67,86,98,87,96,75,95];


// let toppers = marks.filter((val)=>{
//     return val >90;
// });

// console.log(toppers);


let n = prompt("Enter a Number");

let arr = [];

for (let i =1 ; i<=n; i++){
    arr[i-1]=i;
}


console.log(arr);

let sum = arr.reduce((res,curr) =>{
    result = res + curr;
});


let factorial = arr.reduce((res,curr) =>{
    result = res * curr;
});
