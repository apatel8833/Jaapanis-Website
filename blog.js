
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