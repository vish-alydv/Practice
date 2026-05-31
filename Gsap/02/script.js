// gsap.to("#box1",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true
// })

// gsap.from("#box2",{
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     scale:2
// })

// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     y:30,
//     delay:1,
//     stagger:-1
// })


var  tl = gsap.timeline()

// tl.to("#box1",{
//     x:1500,
//     rotate:360,
//     duration:1,
//     delay:1
// })


// tl.to("#box2",{
//     x:1500,
//     rotate:180,
//     duration:1.5,
//     radius:"40%",
//     backgroungColor:"blue"

// })
// tl.to("#box3",{
//     x:1500,
//     rotate:360,

// })



tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})