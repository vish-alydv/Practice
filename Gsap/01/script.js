gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:2
})

gsap.from("#box2",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:2
})

gsap.from("h1",{
    opacity:0,
    duration:1,
    y:30,
    delay:1,
    stagger:-1
})