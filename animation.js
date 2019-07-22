let space = document.getElementById("space");
let sea = document.getElementById("sea");
let bomb = document.getElementsByClassName("bomb")[0];

if(bomb){
    bomb.addEventListener("click",transformTobomb);
}

 function transformTobomb (event) {
    let bomb = event.currentTarget;
    bomb.classList.remove("bomb");
    bomb.classList.add("bomb");
    space.classList.add("section-moving");
    sea.classList.add("section-moving");
}
