let btn1 = document.querySelector("#btn1");

// btn1.onclick = ()=> {
//     console.log("Button Was Clicked");
// }


// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You Are Inside Div");
// }


btn1.addEventListener("click",(evt)=>{
    console.log("Button 1 Was Clicked");
    // console.log(evt);
    // console.log(evt.type);
});



btn1.addEventListener("click",()=>{
    console.log("Button 1 Was Clicked 2nd Time");
});


let function3 = () =>{
    console.log("Button 1 Was Clicked 3rd Time");
}

btn1.addEventListener("click",function3);
btn1.addEventListener("click",()=>{
    console.log("Button 1 Was Clicked 4th Time");
});


btn1.removeEventListener("click",function3);