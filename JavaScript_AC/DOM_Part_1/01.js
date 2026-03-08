// let h2 = document.querySelector("h2");

// console.log(h2);
// console.dir(h2);


// h2.innerText = h2.innerText + "!  " + "Calling From Earth" ;



let divs = document.querySelectorAll(".box");
// console.log(divs[1]);

// divs[0].innerText = "New  Unique Value 1";
// divs[1].innerText = "New  Unique Value 2";
// divs[2].innerText = "New  Unique Value 3";


let idx = 1;

for (div of divs) {
    div.innerText = `new Unique Value ${idx}`;
    idx++
}