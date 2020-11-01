var click = document.getElementsByClassName("click")[0];

click.addEventListener("touchstart", function(){
    click.classList.add("flip-card-back");
})

click.addEventListener("touchend", function(){
    click.classList.remove("flip-card-back");
})