
let imgON = document.getElementById("img")
function img(){
   imgON.src="bulb.on.png"
   imgON.className="styling"
   document.getElementById("on").disabled= true
   document.getElementById("off").disabled= false
}


function imgOff(){
imgON.src="bulb.off.png"
document.getElementById("on").disabled= false
document.getElementById("off").disabled= true
}