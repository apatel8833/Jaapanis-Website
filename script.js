document.querySelector(".nav>ul>li").addEventListener("mouseover",function(){
    gsap.to(".nav>ul>li::after",{
        width:"200"
    })
})

gsap.to(".img4",{
    y:"30",
    duration:1,
    repeat:-1
})
gsap.from(".img4",{
    y:"30",
    duration:1,
    repeat:-1,
    yoyo:true
    
})
gsap.to("#fourth>.slide1",{
    x:"-100%",
    duration:35,
    ease:"linear",
    repeat:-1
    
})

gsap.to("#fourth>.slide2",{
    x:"-100%",
    duration:35,
    ease:"linear",
    repeat:-1
    
})


var flag =0;
if(flag===0){

    document.querySelector(".menu").addEventListener("click",function(){
        // document.querySelector(".menulayer").style.display="Block"
        gsap.to(".menulayer",{
            display:"Block",
            duration:3
        })
    })
    document.querySelector(".cros").addEventListener("click",function(){
        // document.querySelector(".menulayer").style.display="Block"
        gsap.to(".menulayer",{
            display:"None",
            duration:3
        })
    })

    flag=1;

    
}
else{
    document.querySelector(".menu").addEventListener("click",function(){
        // document.querySelector(".menulayer").style.display="Block"
        gsap.to(".menulayer",{
            display:"None",
            duration:3
        })
    })
    document.querySelector(".cros").addEventListener("click",function(){
        // document.querySelector(".menulayer").style.display="Block"
        gsap.to(".menulayer",{
            display:"Block",
            duration:3
        })
    })

    flag=1;

    
}
gsap.from("#first>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:4

    },
    y:"40"
    
})
gsap.from("#sec>.txt1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:4

    },
    y:"40"
    
})

gsap.from("#sec>.txt2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:4

    },
    y:"40"
    
})

gsap.from("#third>.img6",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:4

    },
    y:"40"
    
})



gsap.to("#third",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:true

    },
    backgroundColor:"#FE5000",
})

// gsap.to("#first>.txt>h1",{
//     onstart:function(){
//         $('#first>.txt>h1').textillate({ 
//             in: { effect: 'fadeInUpBig' } });
        
//     }
// })

