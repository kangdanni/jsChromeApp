const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d"

function handlerClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }

}



function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click",handlerClick)
}

init();
// if(10 > 5) {
//     console.log("hi")
// }
// else {
//     console.log("ho")
// }