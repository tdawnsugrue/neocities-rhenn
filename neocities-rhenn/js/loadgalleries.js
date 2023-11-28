function response_callback(response){
    if (response.status == 200){
        console.log("status: 200")
        return response.text();
    }
};

function data_callback(data){
    let images = JSON.parse(data);
    for(let i = 0; i < images.length; i++){
        let img = document.createElement("img");
        img.alt = images[i].name;
        img.src = images[i].url;
        img.classList.add("gallery-image");
        document.getElementById("gallery").appendChild(img);
    }
}

function sketch_callback(data){
    let images = JSON.parse(data);
    for(let i = 0; i < images.length; i++){
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.alt = images[i].name;
        img.src = images[i].url;
        img.classList.add("gallery-image");
        img.classList.add("img-clickable")
        card.appendChild(img);
        //card.appendChild("<p>" + images.date + "</p>");
        document.getElementById(images[i].section).appendChild(card);
    }
}

function gallery_toggle() {
    console.log("toggle!");
    let gallery = document.getElementById("gallery");
    let btn = document.querySelector("button");
    if (gallery.style.display == "none"){
        gallery.style.display = "flex";
        btn.innerText = "Hide";
    } else {
        gallery.style.display = "none";
        btn.innerText = "Show";
    }
}

console.log("testing");

let btn = document.createElement("button");
btn.onclick = gallery_toggle;
btn.type = "button";
btn.innerText = "Toggle";
btn.classList.add("galleryButton");

let p = document.getElementById("recent-container");
let c = document.getElementById("gallery");
p.insertBefore(btn, c);

fetch("json/gallery.json").then(response_callback).then(data_callback );
fetch("json/sketches.json").then(response_callback).then(sketch_callback);