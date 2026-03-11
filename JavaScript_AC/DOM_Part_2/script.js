// let div = document.querySelector("div");

// div.style.backgroundColor = "green";

// div.innerText="Heelo Ye Bad Me Aya";

// div.style.fontSize ="25px";


// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";
// console.log(newBtn);
// let div = document.querySelector("div");
// // div.append(newBtn);
// div.before(newBtn);



let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am Ghost</i>";

document.querySelector("body").prepend(newHeading);

newHeading.remove()