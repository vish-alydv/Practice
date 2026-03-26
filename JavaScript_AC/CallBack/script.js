const getPromsie = ()=> {
    return new promise((resolve,reject)=>{
        console.log("I am Promise");
        resolve("Succes");
    });
};


let promise = getPromsie();
promise.then((res)=>{
    console.log("Promise Fullfilled",res);
});

promise.catch((err)=>{
    console.log("Rejected",err);
});






























// function getData(DataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data",DataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }



// getData(1,()=>{
//     console.log("Getting Data @...");
//     getData(2,()=>{
//         console.log("Getting Data @...");
//         getData(3,()=>{
//             console.log("Getting Data @...");
//             getData(4);
//         });
//     });
// });
