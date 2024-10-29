var man = document.querySelector("#main")
var crsc = document.querySelector(".cursor")


man.addEventListener("mousemove",function(dets){
    crsc.style.left=dets.x+"px"
    crsc.style.top=dets.y+"px"
})
