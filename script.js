var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30 +"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200 +"px"
    blur.style.top=dets.y-200+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.border="1px solid #fff"
        crsr.style.scale=3
        crsr.style.backgroundColor="transparent"
    })
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        crsr.style.border="0px solid #95C11E"
        crsr.style.scale=1
        crsr.style.backgroundColor="95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor: "black",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -9%",     //nav ko -9% ke base pe gayab aur visible karega
        scrub:2        //loop pe chala dega nav ke gayab hone ko iski value koi number me bhi de skte h
        
    }
    
})
gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:" top -50%",
        end:"top -100%",
        scrub:2
    }
})