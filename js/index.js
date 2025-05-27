let btn = document.querySelector(".btn");
let btu = document.querySelector(".btu-toogle");
let body = document.querySelector("body");
let nav = document.querySelector(".nav-dark");

let verfiy = 0;

btn.addEventListener("click", () => {
    if (verfiy === 0) {
        btn.classList.add("btn-18px");
        btu.classList.remove("btn");
        verfiy = 1;
    }else {
        btn.classList.remove("btn-18px");
        btn.classList.add("btn");
        verfiy = 0;
    }
})

btu.addEventListener("click", () => {
    if (verfiy === 0) {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
    }else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    } 
});


