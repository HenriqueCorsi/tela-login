const body = document.createElement("body");
const btnDark = document.querySelector(".btn-dark");
const btnWhite = document.querySelector(".btn-white");
const gif = document.querySelector(".gif");
const titleTop = document.querySelector(".title-top");
const titleDown = document.querySelector(".title-down");

btnDark.addEventListener("click", function(){
    document.body.style.backgroundColor = "#000"

    btnDark.style.backgroundColor = "#fff"
    btnDark.style.color = "#000"

    btnWhite.style.backgroundColor = "#fff"
    btnWhite.style.backgroundColor  = "#fff"

    titleTop.style.color = "#fff"
    titleDown.style.color = "#fff"

    gif.src = "../../assets/img/black.gif"
});


btnWhite.addEventListener("click", function(){
    document.body.style.backgroundColor = "#fff"

    btnDark.style.backgroundColor = "#000"
    btnDark.style.color = "#fff"

    btnWhite.style.backgroundColor = "#000"
    btnWhite.style.backgroundColor  = "#fff"

    titleTop.style.color = "#000"
    titleDown.style.color = "#000"

    gif.src = "../../assets/img/white.gif"
})