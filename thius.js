
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
gsap.to(".img1",{
    y:"40",
    duration:"2",
    repeat:"-1"
})
gsap.from(".img1",{
    y:"-40",
    duration:"2",
    repeat:"-1",
    yoyo:true
})

// gsap.to("#first>.txt1>h1",{
//     onstart:function(){
//         $('#first>.txt1>h1').textillate({ 
//             in: { effect: 'fadeInUpBig' } });
        
//     }
// })



gsap.from("#first>.txt1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:true

    },
    y:"50"


})
gsap.from("#first>.txt2",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#first",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        scrub:true

    },
    y:"50"


})
gsap.from("#first>.rotate1",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:true,
        start:"top 0%",
        end:"bottom 30%",
        // scrub:true

    },
    transform:"rotate(10deg)"


})