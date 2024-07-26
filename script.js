// // Home
gsap.from("nav h2",{
    // y:-400,
    rotation:80,
    duration:1
})
gsap.from(".heading h1",{
    scale:0.2,
    y:200,
    opacity:0,
    duration:3,
    delay:2.6
})
gsap.from(".section ul li a ",{
    y:-400,
    opacity:0,
    stagger:0.4,
    duration:0.6,
    delay:1
})
gsap.from(".hero-btn .btn",{
    rotation:40,
    scale:0.2,
    y:300,
    opacity:0,
    duration:2,
    delay:3
})
// // // Features
// gsap.from(".features .header h2",{
//     y:-150,
//     opacity:0,
//     duration:1,
//     scrollTrigger:".features .header h2"
//         // scroller:"body",
//         // start:"top 40%",
// })
// gsap.from("#hr1",{
//     x:-900,
//     duration:1.5,
//     opacity:0,
//     scrollTrigger:"#hr1"
//         // scroller:"body",
//         // start:"top 50%"
// })
// gsap.from("#hr2",{
//     x:900,
//     duration:1.5,
//     opacity:0,
//     scrollTrigger:"#hr2"
//         // scroller:"body",
//         // start:"top 50%",
    
// })
// gsap.from("#side",{
//     scale:0,
//     // rotate:120,
//     duration:2,
//     x:-900,
//     opacity:0,
//     ease:"power1.in",
//     scrollTrigger:".features"
//         // scroller:"body",
//         // start:"top 60%"
// })

// gsap.from("#corner",{
//     ease:"power1.in",
//     scale:0,
//     opacity:0,
//     // rotate:-120,
//     duration:2,
//     x:900,
//     y:300,
//     scrollTrigger:".features"
//         // scroller:"body",
//         // start:"top 60%"
// })

// // // about-us
// gsap.from(".about .header h2",{
//     y:-150,
//     opacity:0,
//     duration:1,
//     scrollTrigger:".about .header h2"
//         // scroller:"body",
//         // start:"50% 60%",
//         // markers:true
// })
// gsap.from(".about .details",{
//     x:400,
//     y:500,
//     rotate:400,
//     duration:3,
//     scrollTrigger:".about .details"
// })
// gsap.from(".img",{
//     scale:0,
//     duration:2,
//     scrollTrigger:".img"
// })


if (window.matchMedia("(max-width: 700px)").matches){
   
    gsap.from(".features",{
        stagger:0.4
    })
    gsap.from("#side",{
       skewX:100,
       rotate:"-30",
       scale:0,
        duration:2,
        scrub:2,
        scrollTrigger:{
            trigger:"#side",
            scroller:"body",
            start:"top 60%"
        }
    })
    gsap.from("#corner",{
        skewX:-100,
        rotate:"30",
        scale:0,
        duration:2,
        scrub:2,
        scrollTrigger:{
            trigger:"#corner",
            scroller:"body"
            // start:"top 60%"
        }
    })
   
}
else{
    gsap.from("#side",{
        scale:0,
        // rotate:120,
        duration:2,
        x:-900,
        opacity:0,
        ease:"power1.in",
        scrollTrigger:"#side"
            // scroller:"body",
            // start:"top 60%"
    })
    gsap.from("#corner",{
        ease:"power1.in",
        scale:0,
        opacity:0,
        // rotate:-120,
        duration:2,
        x:900,
        y:300,
        scrollTrigger:"#corner"
            // scroller:"body",
            // start:"top 60%"
    })
  
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
