

const hamburger = document.querySelector(".hamburger");
const navmanu = document.querySelector(".nav-manu");
const navmanuitem = document.querySelectorAll(".nav-manu-item");

let btn = document.querySelector(".front-btn");
let btn2 = document.querySelector(".second-front-btn");


hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navmanu.classList.toggle("active");
})


btn.addEventListener("click", function () {
    alert("I don't have any content at the moment, I'm updating my website, sorry about that")
})
btn2.addEventListener("click", function () {
    alert("I don't have any content at the moment, I'm updating my website, sorry about that")
})
// type writer for all pages

let title = document.querySelector(".main-text");
let names = "CodeWithSharp";
let index = 1;


let typeWriter = () => {
    let new_title = names.slice(0, index);
    title.innerText = new_title;
    index > names.length ? index = 1 : index++
    // setTimeout(handler,() =>typeWriter(),600)
    setTimeout(() => {
        typeWriter()
    }, 150);
}
typeWriter();


const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let dnd=document.querySelector("#moon");
console.log(dnd);
  function color( ) {
      document.body.style.backgroundColor="lightGrey"
  }
