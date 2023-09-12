function submit(id) {
    document.getElementById(id);
    alert("Your cart is empty!")
}

function hover(img){
    img.src = "images-2/assets/succulents-2.jpg"
}
function hoverOut(img) {
    img.src = "images-2/assets/succulents-1.jpg"
}

function removeMe(id){
    const element = document.getElementById("alert");
    element.remove();
    id.remove();
    alert.innerHTML--;
}
