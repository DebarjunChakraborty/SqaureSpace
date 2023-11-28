var tm = gsap.timeline()

tm.from("#nav img, #nav h3, #nav h4, #nav button",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})

tm.from("#main h1",{
    y:100,
    opacity:0,
    stagger:0.5
})

tm.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.5
})

tm.from("h5",{
    scale: 0,
    opacity:0, 
})

tm.to("h5", {
    y: 30,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})