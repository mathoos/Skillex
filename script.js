console.log("ahah")

let face = document.getElementById("face");
let cinema = document.getElementById("cinema");
let city = document.getElementById("city");

cinema.addEventListener("mouseover", () =>{
    cinema.classList.add("toggle");
    face.style.width = '20%';
})

cinema.addEventListener("mouseleave", () =>{
    cinema.classList.remove("toggle");
    face.style.width = '50%';
})

city.addEventListener("mouseover", () =>{
    city.classList.add("toggle");
    face.style.width = '20%';
})

city.addEventListener("mouseleave", () =>{
    city.classList.remove("toggle");
    face.style.width = '50%';
})