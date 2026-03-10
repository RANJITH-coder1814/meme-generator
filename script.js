function generateMeme(){

let imageInput = document.getElementById("imageInput").files[0];
let topText = document.getElementById("topText").value;
let bottomText = document.getElementById("bottomText").value;

let memeImage = document.getElementById("memeImage");

if(imageInput){
memeImage.src = URL.createObjectURL(imageInput);
}

document.getElementById("top").innerText = topText;
document.getElementById("bottom").innerText = bottomText;

}
