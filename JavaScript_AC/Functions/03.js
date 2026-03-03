// let arr = ["pune","nike","bali","red"];

// arr.forEach((val ,idx,arr)=>{
//     console.log(val.toUpperCase(),idx,arr);
// })


// let nums = [23,43,56];

// let newArr = nums.map((val) => {
//     return val*2;
// })

// console.log(newArr);


// let nums = [23,43,56];

// let evenArr = nums.filter((val) => {
//     return val%2===0;
// })

// console.log(evenArr);



let arr1 = [23,543,54,65,76];
const opt = arr.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(output);



let arr = [23,543,54,65,76];

const output = arr.reduce((prev,curr)=>{
    return prev > curr ? prev : curr;
});

console.log(output);