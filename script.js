gsap.from("#header" ,{
    delay: 0.3,
    opacity: 0,
    duration: 1,
     y : -80
})

gsap.from("#frontPage img" ,{
    delay: 0.4,
    opacity: 0,
    duration: 1,
     y : 95,
})

gsap.from("#frontPage img" ,{
    scrollTrigger:{
        trigger: "#frontPage img",
        scroller: "body",
        scrub: 2
    }
})

gsap.from("#txt0" ,{
    delay: 0.4,
    opacity: 0,
    duration: 1,
     y : -80,
})

gsap.from("#txt2o" ,{
    delay: 0.4,
    opacity: 0,
    duration: 1,
     y : 80,
      
})

gsap.from("#scndPage #scndHeader" ,{
    opacity: 0,
    delay: 0.25,
    y: 90,
     scrollTrigger:{
        trigger: "#scndPHeader h1",
        scroller: "body",
        scrub: 2,
        start : 260,
        end: 680

    }
})

gsap.from("#scndPage #p1" ,{
    opacity: 20,
    y:70,
    delay: 0.5,
    scrollTrigger:{
        trigger: "#scndPage #p1",
        scroller: "body",
        scrub: 4,
        marker: true

    }
})

gsap.from("#scndPage #p2" ,{
    opacity: 20,
    y: 70,
    delay:0.5,
    scrollTrigger:{
        trigger: "#scndPage #p2",
        scroller: "body",
        scrub: 4
    }
})

gsap.from("#scndPage #p3" ,{
    opacity: 20,
    y: 70,
    delay:0.5,
     scrollTrigger:{
        trigger: "#scndPage #p2",
        scroller: "body",
        scrub: 4
    }
})


gsap.from("#ig #img img",{
    opacity: 0,
    delay: 0.5,
    x: -150
})

gsap.from("#gm #img img",{
    opacity: 0,
    delay: 0.5,
    x: -150
})

gsap.from("#ig #txt a",{
    opacity: 0,
    delay: 0.5,
    x: 150
})

gsap.from("#gm #txt a",{
    opacity: 0,
    delay: 0.5,
    x: 150
})

gsap.from("#frontPage1",{
    opacity: 0,
    y : 130,
    delay : 0.4
})


const a = document.getElementById("abc");

a.addEventListener("mouseenter",function(){
    a.innerHTML = "sy844662@gmail.com";
    a.style.background = "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)"
    a.style.backgroundClip = "text",
    a.style.webkitBackgroundClip = "text",
    a.style.color = "transparent",
    a.style.webkitTextFillColor = "transparent"
})

a.addEventListener("mouseleave",function(){
    a.innerHTML = "G-MAIL";
    a.style.background = "background: linear-gradient(90deg, #d93025,   #f9ab00,    #34a853,   #4285f4 )",
    a.style.backgroundClip = "text",
    a.style.webkitBackgroundClip = "text",
    a.style.color = "transparent",
    a.style.webkitTextFillColor = "transparent"

})

gsap.from("#ld #img img",{
    opacity: 0,
    delay: 0.1,
    x: -150,
    scrollTrigger:{
      trigger: "#ld #txt a",
      scroller: "body",
    }
})

gsap.from("#ld #txt a",{
    opacity: 0,
    delay: 0.1,
    x: 150,
    scrollTrigger:{
      trigger: "#ld #txt a",
      scroller: "body", 
    }
})

