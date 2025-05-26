
let fullimagebox = document.getElementById("full-image-box")
let fullimage = document.getElementById("full-image")

function openfullimage(pic){
    fullimagebox.style.display="flex";
    fullimage.src = pic
}
function closefullimage(){
    fullimagebox.style.display = "none"
}
